import { curry, insert, pipe, join } from 'ramda';
import onlyDigits from './onlyDigits';

const insertSlash = curry((idx, list) => insert(idx, ' / ', list));

export default pipe(
  onlyDigits,
  insertSlash(3),
  insertSlash(8),
  join(''),
  s => `+++ ${s} +++`
);
