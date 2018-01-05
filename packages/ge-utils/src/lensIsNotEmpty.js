import { pipe, view, isEmpty, not } from 'ramda';

const lensIsNotEmpty = lens => pipe(
  view(lens),
  isEmpty,
  not,
);

export default lensIsNotEmpty;
