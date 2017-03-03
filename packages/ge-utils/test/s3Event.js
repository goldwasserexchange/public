import test from 'ava';
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

test('event', t => t.deepEqual(event(awsEvent), s3));

test('bucket', t => t.is(bucket(awsEvent), s3.bucket.name));

test('key', t => t.is(key(awsEvent), s3.object.key));
