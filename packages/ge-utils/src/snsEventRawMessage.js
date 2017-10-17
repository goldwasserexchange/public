import * as R from 'ramda';
import snsEvent from './snsEvent';

export default R.compose(R.prop('Message'), snsEvent);
