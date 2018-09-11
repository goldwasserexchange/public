import {
  pipe, take, mathMod, __,
} from 'ramda';
import parseInt10 from './parseInt10';
import onlyDigits from './onlyDigits';

export default pipe(
  onlyDigits,
  take(10),
  parseInt10,
  mathMod(__, 97) // eslint-disable-line no-underscore-dangle
);
