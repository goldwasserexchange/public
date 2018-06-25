import { pipe, lt, filter } from 'ramda';

const filterLt = pipe(
  lt,
  filter
);

export default filterLt;
