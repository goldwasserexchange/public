import { pipe, replace, unless, ifElse } from 'ramda';
import startsWith from './startsWith';

const startsWith00 = startsWith('00');
const startsWithPlus = startsWith('+');

const formatPhone = pipe(
  replace(/[^\d+]/g, ''),
  unless(
    startsWithPlus,
    ifElse(
      startsWith00,
      replace('00', '+'),
      replace('0', '+32')
    )
  )
);

export default formatPhone;
