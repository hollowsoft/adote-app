import pulumi

import zone as z
import bucket as b

bucket, configuration = b.run()

zone = z.run(configuration)

pulumi.export('zone', zone.id)
pulumi.export('bucket', bucket.id)
