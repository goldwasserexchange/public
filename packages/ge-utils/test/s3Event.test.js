import { event, bucket, key } from '../src/s3Event';

const s3 = {
  bucket: { name: 'bucket-name' },
  object: { key: 'object-name' },
};
const awsEvent = {
  Records: [
    { s3 },
  ],
};

test('event', () => expect(event(awsEvent)).toEqual(s3));

test('bucket', () => expect(bucket(awsEvent)).toBe(s3.bucket.name));

test('key', () => expect(key(awsEvent)).toBe(s3.object.key));
