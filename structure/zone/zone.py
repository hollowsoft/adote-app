from pulumi import Config

from pulumi_aws.s3 import BucketWebsiteConfigurationV2 as BucketConfiguration
from pulumi_aws.route53 import RecordType

from pulumi_cloudflare import Zone, Record

domain = Config().require('application.domain')

def run(bucket_url: str):
  zone = Zone(
    domain,
    zone=domain,
    account_id=''
  )

  Record(
    domain,
    type=RecordType.CNAME,
    name='@',
    value=bucket_url,
    zone_id=zone.id,
    proxied=True
  )

  Record(
    f'www.{domain}',
    type=RecordType.CNAME,
    name='www',
    value=domain,
    zone_id=zone.id,
    proxied=True
  )

  return zone.zone
