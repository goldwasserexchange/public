# aws-lenses
Ramda lenses for AWS Lambda events

## Usage
### Example with SNS
```
import { view } from 'ramda';
import { messageJson } from '@goldwasserexchange/aws-lenses/services/sns'

// Lambda function triggered by SNS
export default async (event) => {
  const message = view(messageJson, event);
  // ...
}
```

### Example with SQS
```
import { view } from 'ramda';
import { records } from '@goldwasserexchange/aws-lenses/services/common';
import { bodyJson } from '@goldwasserexchange/aws-lenses/services/sqs';

// Lambda function triggered by SQS
export default async (event) => {
  const bodies = compose(map(view(bodyJson)), view(records))(event)
  // ...
}
```

### Example with S3
```
import { S3 } from 'aws-sdk';
import { view } from 'ramda';
import { bucketName, objectKey } from '@goldwasserexchange/aws-lenses/services/s3';

const s3 = new S3();

// Lambda function triggered by S3
export default async (event) => {
  const data = await s3.getObject({
    Bucket: view(bucketName, event),
    Key: view(objectKey, vent)
  }).promise();
  // ...
}
```
