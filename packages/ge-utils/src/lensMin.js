
import { pipe, view, curry } from 'ramda';

import mathMinSpread from './mathMinSpread';

const lensMin = (lens, obj) => pipe(
  view(lens),
  mathMinSpread
)(obj);

export default curry(lensMin);
