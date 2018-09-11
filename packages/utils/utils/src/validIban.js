import {
  when, test, compose, toUpper, pipe, map, join, __, equals,
} from 'ramda';
import removeSpaces from './removeSpaces';
import moveCharsToEnd from './moveCharsToEnd';
import stringModulo from './stringModulo';

const toDigit = when(test(/[A-Za-z]/), compose(char => `${char.charCodeAt(0) - 55}`, toUpper));

export default pipe(
  removeSpaces,
  moveCharsToEnd(4),
  map(toDigit),
  join(''),
  stringModulo(__, 97), // eslint-disable-line no-underscore-dangle
  equals(1)
);
