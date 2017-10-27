import { compose, toUpper, join, splitEvery } from 'ramda';
import removeSpaces from './removeSpaces';

export default compose(toUpper, join(' '), splitEvery(4), removeSpaces);
