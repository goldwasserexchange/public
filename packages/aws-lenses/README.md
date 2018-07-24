# aws-lenses
Ramda lenses for AWS Lambda events

## Usage
### Example with SNS
```javascript
import { view } from 'ramda';
import { messageJson } from '@goldwasserexchange/aws-lenses/services/sns'

// Lambda function triggered by SNS
export default async (event) => {
  const message = view(messageJson, event);
  // ...
}
```

### Example with SQS
```javascript
import { map, view } from 'ramda';
import { records } from '@goldwasserexchange/aws-lenses/services/common';
import { bodyJson } from '@goldwasserexchange/aws-lenses/services/sqs';

// Lambda function triggered by SQS
export default async (event) => {
  const bodies = compose(map(view(bodyJson)), view(records))(event)
  // ...
}
```

### Example with S3
```javascript
import { S3 } from 'aws-sdk';
import { view } from 'ramda';
import { bucketName, objectKey } from '@goldwasserexchange/aws-lenses/services/s3';

const s3 = new S3();

// Lambda function triggered by S3
export default async (event) => {
  const data = await s3.getObject({
    Bucket: view(bucketName, event),
    Key: view(objectKey, event)
  }).promise();
  // ...
}
```

### Example with SES with S3 action and SNS notification
```javascript
import { S3 } from 'aws-sdk';
import { view } from 'ramda';
import { messageJson } from '@goldwasserexchange/aws-lenses/services/sns';
import { actionBucketName, actionObjectKey } from '@goldwasserexchange/aws-lenses/services/ses';

const s3 = new S3();

// Lambda function triggered by SNS
export default async (event) => {
  const message = view(messageJson, event);

  const emailData = await s3.getObject({
    Bucket: view(actionBucketName, message),
    Key: view(actionObjectKey, message)
  }).promise();
  // ...
}
```
