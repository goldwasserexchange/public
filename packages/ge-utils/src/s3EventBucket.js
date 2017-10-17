import * as R from 'ramda';
import s3Event from './s3Event';

export default R.compose(R.path(['bucket', 'name']), s3Event);
