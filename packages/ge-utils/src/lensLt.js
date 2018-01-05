import { view, lt, pipe, curry } from 'ramda';

const lensLt = (lens, value) => pipe(
  view(lens),
  lt(value)
);

export default curry(lensLt);
