terraform {
  required_providers {
    aws = { source = "hashicorp/aws" }
  }
}

variable "enabled" {
  type    = bool
  default = false
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

module "this" {
  source          = "./module"
  count           = var.enabled ? 1 : 0
  production      = var.production
  s3-bucket       = var.s3-bucket
  route53-zone    = var.route53-zone
  route53-aliases = var.route53-aliases
  csp-connect-src = var.csp-connect-src
}
