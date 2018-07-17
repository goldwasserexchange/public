import { compose, lensProp } from 'ramda';
import { messageJson } from './sns';

export const mail = compose(messageJson, lensProp('mail'));

export const receipt = compose(messageJson, lensProp('receipt'));

export const action = compose(receipt, lensProp('action'));
export const actionBucketName = compose(action, lensProp('bucketName'));
export const actionObjectKey = compose(action, lensProp('objectKey'));
