import { compose, prop } from 'ramda';
import snsEvent from './snsEvent';

export default compose(prop('Message'), snsEvent);
