import { compose, lensProp } from 'ramda';
import { headRecord } from './common';

export const s3 = compose(headRecord, lensProp('s3'));

export const object = compose(s3, lensProp('object'));
export const objectKey = compose(object, lensProp('key'));
export const objectSize = compose(object, lensProp('size'));

export const bucket = compose(s3, lensProp('bucket'));
export const bucketArn = compose(bucket, lensProp('arn'));
export const bucketName = compose(bucket, lensProp('name'));
