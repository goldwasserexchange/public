import R from 'ramda';
import removeSpaces from './removeSpaces';
import moveCharsToEnd from './moveCharsToEnd';
import stringModulo from './stringModulo';

export const format = R.compose(R.toUpper, R.join(' '), R.splitEvery(4), removeSpaces);

const toDigit = R.when(isNaN, R.compose(char => `${char.charCodeAt(0) - 55}`, R.toUpper));

export const valid = R.pipe(
  removeSpaces,
  moveCharsToEnd(4),
  R.map(toDigit),
  R.join(''),
  stringModulo(R.__, 97), // eslint-disable-line no-underscore-dangle
  R.equals(1)
);
