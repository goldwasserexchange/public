import { pipe, view, isEmpty } from 'ramda';

const lensIsEmpty = lens => pipe(
  view(lens),
  isEmpty,
);

export default lensIsEmpty;
