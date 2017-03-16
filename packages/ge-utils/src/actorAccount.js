import R from 'ramda';
import parseInt10 from './parseInt10';

export const isAccount = R.test(/^\d{3}\/\d{7}\/\d{2}$/);

export const mod = R.compose(R.mathMod(R.__, 97), parseInt10, R.take(10), R.replace(/[^\d]/g, '')); // eslint-disable-line no-underscore-dangle

export const modValid = R.converge(
  R.equals,
  [
    mod,
    R.compose(parseInt10, R.takeLast(2)),
  ]
);

export const valid = R.both(isAccount, modValid);
