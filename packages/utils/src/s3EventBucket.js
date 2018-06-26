import { compose, path } from 'ramda';
import s3Event from './s3Event';

export default compose(path(['bucket', 'name']), s3Event);
