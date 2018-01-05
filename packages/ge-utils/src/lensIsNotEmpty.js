import { pipe, view, isEmpty, not } from 'ramda';

const lensIsEmpty = lens => pipe(
  view(lens),
  isEmpty,
  not,
);

export default lensIsEmpty;
