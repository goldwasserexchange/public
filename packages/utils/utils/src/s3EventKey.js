import { compose, path, replace } from 'ramda';
import s3Event from './s3Event';

const rawKey = compose(path(['object', 'key']), s3Event);

export default compose(decodeURIComponent, replace(/\+/g, ''), rawKey);
