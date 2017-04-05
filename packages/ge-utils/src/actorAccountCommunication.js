import R from 'ramda';
import onlyDigits from './onlyDigits';

const insertSlash = R.curry((idx, list) => R.insert(idx, ' / ', list));

export default R.pipe(
  onlyDigits,
  insertSlash(3),
  insertSlash(8),
  R.join(''),
  s => `+++ ${s} +++`
);
