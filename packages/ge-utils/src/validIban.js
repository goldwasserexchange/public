import * as R from 'ramda';
import removeSpaces from './removeSpaces';
import moveCharsToEnd from './moveCharsToEnd';
import stringModulo from './stringModulo';

const toDigit = R.when(isNaN, R.compose(char => `${char.charCodeAt(0) - 55}`, R.toUpper));

export default R.pipe(
  removeSpaces,
  moveCharsToEnd(4),
  R.map(toDigit),
  R.join(''),
  stringModulo(R.__, 97), // eslint-disable-line no-underscore-dangle
  R.equals(1)
);
