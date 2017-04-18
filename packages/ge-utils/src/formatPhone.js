import R from 'ramda';

export default R.pipe(
  R.replace(/[^\d+]/g, ''),
  R.when(R.test(/^00[1-9][\d]{8,14}$/), R.replace(/^00/, '+')),
  R.when(R.test(/^0[\d]{8,9}$/), R.replace(/^0/, '+32'))
);
