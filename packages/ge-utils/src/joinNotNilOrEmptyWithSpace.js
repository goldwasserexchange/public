import { compose, join } from 'ramda';

import rejectNilOrEmpty from './rejectNilOrEmpty';

const joinNotNilOrEmptyWithSpace = compose(
  join(' '),
  rejectNilOrEmpty
);

export default joinNotNilOrEmptyWithSpace;
