import { pipe, join } from 'ramda';

import rejectNilOrEmpty from './rejectNilOrEmpty';

const joinNotNilOrEmptyWithSpace = pipe(
  rejectNilOrEmpty,
  join(' '),
);

export default joinNotNilOrEmptyWithSpace;
