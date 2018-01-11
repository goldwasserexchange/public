import { view, lt, pipe, curry } from 'ramda';

const lensLt = (lens, value, obj) => pipe(
  view(lens),
  lt(value)
)(obj);

export default curry(lensLt);
