terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "3.74.0"
    }
  }
}

provider "aws" {
  
}

resource "aws_s3_bucket" "bucket" {
  bucket = var.bucket
  
  acl = "public-read"
  policy = data.aws_iam_policy_document.policy.json

  website {
    index_document = "index.html"
    error_document = "index.html"
  }
}

data "aws_iam_policy_document" "policy" {
  statement {
    actions = ["s3:GetObject"]
    resources = ["arn:aws:s3:::${var.bucket}/*"]

    principals {
      identifiers = ["*"]
      type = "*"
    }
  }
}
