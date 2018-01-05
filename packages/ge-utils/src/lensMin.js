
import { pipe, view } from 'ramda';

import mathMinSpread from './mathMinSpread';

const lensMin = lens => pipe(
  view(lens),
  mathMinSpread
);

export default lensMin;
