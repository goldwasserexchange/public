import { pipe, view, isEmpty, curry } from 'ramda';

const lensIsEmpty = (lens, obj) => pipe(
  view(lens),
  isEmpty,
)(obj);

export default curry(lensIsEmpty);
