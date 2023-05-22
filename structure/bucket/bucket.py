import json

from pulumi import Config, ResourceOptions

from pulumi_aws.s3 import (
  BucketV2 as Bucket,
  BucketAclV2 as BucketAcl,
  BucketPolicy,
  BucketPublicAccessBlock,
  BucketOwnershipControls,
  BucketOwnershipControlsRuleArgs,
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

  bucket_control = BucketOwnershipControls(
    domain,
    bucket=bucket.id,
    rule=BucketOwnershipControlsRuleArgs(
      object_ownership='BucketOwnerPreferred'
    )
  )

  bucket_public_access = BucketPublicAccessBlock(
    domain,
    bucket=bucket.id,
    block_public_acls=False,
    block_public_policy=False,
    ignore_public_acls=False,
    restrict_public_buckets=False
  )

  BucketAcl(
    domain,
    bucket=bucket.id,
    acl='public-read',
    opts=ResourceOptions(
      depends_on=[
        bucket_control,
        bucket_public_access
      ]
    )
  )

  BucketPolicy(
    domain,
    bucket=bucket.id,
    policy=json.dumps({
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
    })
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

  return bucket.id, configuration.website_endpoint
