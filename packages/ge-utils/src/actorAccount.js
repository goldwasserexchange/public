import R from 'ramda';
import parseInt10 from './parseInt10';
import onlyDigits from './onlyDigits';

export const isAccount = R.test(/^\d{3}\/\d{7}\/\d{2}$/);

export const mod = R.pipe(
  onlyDigits,
  R.take(10),
  parseInt10,
  R.mathMod(R.__, 97) // eslint-disable-line no-underscore-dangle
);

export const modValid = R.converge(
  R.equals,
  [
    mod,
    R.compose(parseInt10, R.takeLast(2)),
  ]
);

export const valid = R.both(isAccount, modValid);

const insertSlash = R.curry((idx, list) => R.insert(idx, ' / ', list));

export const structuredCommunication = R.pipe(
  onlyDigits,
  insertSlash(3),
  insertSlash(8),
  R.join(''),
  s => `+++ ${s} +++`
);
