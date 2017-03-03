import R from 'ramda';
import awsEvent from './awsEvent';

export const event = awsEvent('s3');

export const bucket = R.compose(R.path(['bucket', 'name']), event);

const rawKey = R.compose(R.path(['object', 'key']), event);

export const key = R.compose(decodeURIComponent, R.replace(/\+/g, ''), rawKey);
