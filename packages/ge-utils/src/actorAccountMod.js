import * as R from 'ramda';
import parseInt10 from './parseInt10';
import onlyDigits from './onlyDigits';

export default R.pipe(
  onlyDigits,
  R.take(10),
  parseInt10,
  R.mathMod(R.__, 97) // eslint-disable-line no-underscore-dangle
);
