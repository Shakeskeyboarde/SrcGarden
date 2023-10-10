terraform {
  required_providers {
    aws = { source = "hashicorp/aws" }
  }
}

variable "production" {
  type = bool
}

variable "s3-bucket" {
  type = string
}

variable "route53-zone" {
  type = string
}

variable "route53-aliases" {
  type    = list(string)
  default = ["", "www"]
}

variable "csp-connect-src" {
  type    = string
  default = null
}

locals {
  route53-aliases-fqdn = [for alias in var.route53-aliases : join(".", compact([alias, var.route53-zone]))]
}

module "s3" {
  source        = "terraform-aws-modules/s3-bucket/aws"
  bucket        = var.s3-bucket
  force_destroy = !var.production
  lifecycle_rule = [{
    id      = "secondary"
    enabled = true
    filter = {
      prefix = "secondary/"
    }
    expiration = {
      days = 90
    }
  }]
}

data "aws_route53_zone" "this" {
  name = var.route53-zone
}

module "acm" {
  source                    = "terraform-aws-modules/acm/aws"
  zone_id                   = data.aws_route53_zone.this.zone_id
  domain_name               = local.route53-aliases-fqdn[0]
  subject_alternative_names = slice(local.route53-aliases-fqdn, 1, length(local.route53-aliases-fqdn))
  validation_method         = "DNS"
  wait_for_validation       = true
  tags                      = { S3Bucket = var.s3-bucket }
}

resource "aws_cloudfront_cache_policy" "this" {
  for_each = {
    mutable   = var.production ? 86400 : 300
    immutable = 63072000
  }
  name        = "${var.s3-bucket}--${each.key}"
  min_ttl     = 0
  default_ttl = each.value
  max_ttl     = 63072000
  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_gzip   = true
    enable_accept_encoding_brotli = true
    cookies_config {
      cookie_behavior = "none"
    }
    headers_config {
      header_behavior = "none"
    }
    query_strings_config {
      query_string_behavior = "none"
    }
  }
}

resource "aws_cloudfront_response_headers_policy" "this" {
  for_each = {
    mutable   = var.production ? "max-age=86400, stale-while-revalidate=604800" : "max-age=300, stale-while-revalidate=604800"
    immutable = "max-age=63072000, immutable"
  }
  name = "${var.s3-bucket}--${each.key}"
  custom_headers_config {
    items {
      header   = "cache-control"
      value    = each.value
      override = false
    }
  }
  security_headers_config {
    content_type_options {
      override = true
    }
    frame_options {
      frame_option = "DENY"
      override     = true
    }
    referrer_policy {
      referrer_policy = "no-referrer"
      override        = true
    }
    xss_protection {
      mode_block = true
      protection = true
      override   = true
    }
    strict_transport_security {
      access_control_max_age_sec = 63072000
      include_subdomains         = true
      preload                    = true
      override                   = true
    }
    content_security_policy {
      content_security_policy = join("; ", [
        "default-src 'self' data:",
        "connect-src ${join(" ", compact(["'self'", var.csp-connect-src]))}",
        "style-src 'self' 'unsafe-inline'",
        "object-src 'none'",
        "frame-ancestors 'none'",
        "base-uri 'none'"
      ])
      override = true
    }
  }
}

module "cloudfront" {
  source              = "terraform-aws-modules/cloudfront/aws"
  aliases             = local.route53-aliases-fqdn
  default_root_object = "index.html"
  price_class         = "PriceClass_100"
  http_version        = "http2and3"
  is_ipv6_enabled     = true
  viewer_certificate = {
    acm_certificate_arn      = module.acm.acm_certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2019"
  }
  create_origin_access_control = true
  origin_access_control = {
    "${var.s3-bucket}--s3oac" = {
      description      = "CloudFront access to S3"
      origin_type      = "s3"
      signing_behavior = "always"
      signing_protocol = "sigv4"
    }
  }
  origin = {
    primary = {
      domain_name           = module.s3.s3_bucket_bucket_regional_domain_name
      origin_path           = "/primary"
      origin_access_control = "${var.s3-bucket}--s3oac"
    }
    secondary = {
      domain_name           = module.s3.s3_bucket_bucket_regional_domain_name
      origin_path           = "/secondary"
      origin_access_control = "${var.s3-bucket}--s3oac"
    }
  }
  origin_group = {
    group_one = {
      failover_status_codes      = [403, 404]
      primary_member_origin_id   = "primary"
      secondary_member_origin_id = "secondary"
    }
  }
  default_cache_behavior = {
    target_origin_id           = "primary"
    viewer_protocol_policy     = "redirect-to-https"
    allowed_methods            = ["GET", "HEAD", "OPTIONS"]
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    use_forwarded_values       = false
    cache_policy_id            = aws_cloudfront_cache_policy.this["mutable"].id
    response_headers_policy_id = aws_cloudfront_response_headers_policy.this["mutable"].id
  }
  ordered_cache_behavior = [
    {
      path_pattern               = "/assets/*"
      target_origin_id           = "primary"
      viewer_protocol_policy     = "redirect-to-https"
      allowed_methods            = ["GET", "HEAD", "OPTIONS"]
      cached_methods             = ["GET", "HEAD"]
      compress                   = true
      use_forwarded_values       = false
      cache_policy_id            = aws_cloudfront_cache_policy.this["immutable"].id
      response_headers_policy_id = aws_cloudfront_response_headers_policy.this["immutable"].id
    }
  ]
  custom_error_response = [
    {
      error_code         = 403
      response_code      = 200
      response_page_path = "/index.html"
    },
    {
      error_code         = 404
      response_code      = 200
      response_page_path = "/index.html"
    },
  ]
}

data "aws_iam_policy_document" "this" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.s3.s3_bucket_arn}/*"]
    principals {
      type        = "Service"
      identifiers = ["cloudfront.amazonaws.com"]
    }
    condition {
      test     = "StringEquals"
      variable = "AWS:SourceArn"
      values   = [module.cloudfront.cloudfront_distribution_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "this" {
  bucket = var.s3-bucket
  policy = data.aws_iam_policy_document.this.json
}

module "route53-records" {
  source  = "terraform-aws-modules/route53/aws//modules/records"
  zone_id = data.aws_route53_zone.this.zone_id
  records = [for alias in var.route53-aliases : {
    name = alias
    type = "A"
    alias = {
      name    = module.cloudfront.cloudfront_distribution_domain_name
      zone_id = module.cloudfront.cloudfront_distribution_hosted_zone_id
    }
  }]
}
