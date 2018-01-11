import { complement } from 'ramda';

import lensIsEmpty from './lensIsEmpty';

const lensIsNotEmpty = lens => complement(lensIsEmpty(lens));

export default lensIsNotEmpty;
