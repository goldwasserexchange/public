import R from 'ramda';
import removeSpaces from './removeSpaces';

export default R.compose(R.toUpper, R.join(' '), R.splitEvery(4), removeSpaces);
