import R from 'ramda';
import snsEventRawMessage from './snsEventRawMessage';
import safeParse from './safeParse';

export default R.compose(safeParse, snsEventRawMessage);
