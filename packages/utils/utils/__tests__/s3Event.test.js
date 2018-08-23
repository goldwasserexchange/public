import s3Event from '../src/s3Event';
import s3EventBucket from '../src/s3EventBucket';
import s3EventKey from '../src/s3EventKey';

const s3 = {
  bucket: { name: 'bucket-name' },
  object: { key: 'object-name' },
};
const awsEvent = {
  Records: [
    { s3 },
  ],
};

test('s3Event', () => expect(s3Event(awsEvent)).toEqual(s3));
test('s3EventBucket', () => expect(s3EventBucket(awsEvent)).toBe(s3.bucket.name));
test('s3EventKey', () => expect(s3EventKey(awsEvent)).toBe(s3.object.key));
