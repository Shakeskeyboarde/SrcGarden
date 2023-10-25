terraform {
  required_version = ">=1.5.5"
  required_providers { aws = { source = "hashicorp/aws", version = "5.13.1" } }
  backend "s3" {
    region         = "us-east-1"
    bucket         = "tfstate-src-garden"
    dynamodb_table = "tfstate"
    key            = "tfstate"
    encrypt        = true
  }
}

provider "aws" {
  allowed_account_ids = ["288171236410"]
}

module "homepage" {
  source       = "./modules/cloudfront"
  enabled      = true
  production   = true
  s3-bucket    = "cloudfront-src-garden-homepage"
  route53-zone = "src.garden"
  csp = [
    "default-src 'self' data: https://raw.githubusercontent.com/",
    "img-src *",
    "style-src 'self' 'unsafe-inline'",
    "object-src 'none'",
    "frame-ancestors 'none'",
    "base-uri 'none'"
  ]
}

output "cloudfront_distribution_id" {
  value = module.homepage.cloudfront_distribution_id
}
