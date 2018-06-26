import { pipe, replace, when, test } from 'ramda';

export default pipe(
  replace(/[^\d+]/g, ''),
  when(test(/^00[1-9][\d]{8,14}$/), replace(/^00/, '+')),
  when(test(/^0[\d]{8,9}$/), replace(/^0/, '+32'))
);
