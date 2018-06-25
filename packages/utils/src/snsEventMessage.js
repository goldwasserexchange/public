import { compose } from 'ramda';
import snsEventRawMessage from './snsEventRawMessage';
import safeParse from './safeParse';

export default compose(safeParse, snsEventRawMessage);
