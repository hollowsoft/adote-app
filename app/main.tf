provider "aws" {
  region = var.region
}

provider "cloudflare" {
  
}

resource "aws_s3_bucket" "app" {
  bucket = var.domain
}

resource "aws_s3_bucket_acl" "app" {
  bucket = aws_s3_bucket.app.id

  acl = "public-read"
}

resource "aws_s3_bucket_policy" "app" {
  bucket = aws_s3_bucket.app.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Sid = "PublicReadGetObject"
      Action = "s3:GetObject"
      Effect = "Allow"
      Principal = "*"
      Resource = [
        aws_s3_bucket.app.arn,
        "${aws_s3_bucket.app.arn}/*"
      ]
    }]
  })
}

resource "aws_s3_bucket_website_configuration" "app" {
  bucket = aws_s3_bucket.app.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }
}

data "cloudflare_zones" "domain" {
  filter {
    name = var.domain
  }
}

resource "cloudflare_record" "record" {
  zone_id = data.cloudflare_zones.domain.zones[0].id

  name = var.domain
  value = aws_s3_bucket_website_configuration.app.website_endpoint

  type = "CNAME"

  ttl = 1
  proxied = true
}
