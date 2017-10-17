import * as R from 'ramda';
import s3Event from './s3Event';

const rawKey = R.compose(R.path(['object', 'key']), s3Event);

export default R.compose(decodeURIComponent, R.replace(/\+/g, ''), rawKey);
