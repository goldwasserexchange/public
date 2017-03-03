import R from 'ramda';
import startsWith from './startsWith';

const startsWith00 = startsWith('00');
const startsWithPlus = startsWith('+');

const formatPhone = R.pipe(
  R.replace(/[^\d+]/g, ''),
  R.unless(
    startsWithPlus,
    R.ifElse(
      startsWith00,
      R.replace('00', '+'),
      R.replace('0', '+32')
    )
  )
);

export default formatPhone;