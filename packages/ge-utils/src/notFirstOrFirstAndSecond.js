import { or, not, and } from 'ramda';

const notFirstOrFirstAndSecond = (first, second) => or(
  not(first),
  and(
    first,
    second,
  )
);

export default notFirstOrFirstAndSecond;
