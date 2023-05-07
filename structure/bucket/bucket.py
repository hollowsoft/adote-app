import json

from pulumi import Config

from pulumi_aws.s3 import (
  BucketV2 as Bucket,
  BucketAclV2 as BucketAcl,
  BucketPolicy,
  BucketWebsiteConfigurationV2 as BucketConfiguration,
  BucketWebsiteConfigurationV2IndexDocumentArgs as IndexDocumentConfiguration,
  BucketWebsiteConfigurationV2ErrorDocumentArgs as ErrorDocumentConfiguration
)

domain = Config().require('application.domain')

def run():
  bucket = Bucket(
    domain,
    bucket=domain,
    force_destroy=True
  )

  BucketAcl(
    domain,
    bucket=bucket.id,
    acl='public-read'
  )

  policy = {
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        f"arn:aws:s3:::{domain}/*"
      ]
    }]
  }

  BucketPolicy(
    domain,
    bucket=bucket.id,
    policy=json.dumps(policy)
  )

  configuration = BucketConfiguration(
    domain,
    bucket=bucket.id,
    index_document=IndexDocumentConfiguration(
      suffix='index.html'
    ),
    error_document=ErrorDocumentConfiguration(
      key='error.html'
    )
  )

  return bucket, configuration
