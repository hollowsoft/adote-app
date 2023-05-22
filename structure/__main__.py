import pulumi

import zone
import bucket

bucket_id, bucket_url = bucket.run()

zone_zone = zone.run(bucket_url)

pulumi.export('zone', zone_zone)
pulumi.export('bucket', bucket_id)
