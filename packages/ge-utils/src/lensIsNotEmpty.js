import { complement, curry } from 'ramda';

import lensIsEmpty from './lensIsEmpty';

const lensIsNotEmpty = (lens, obj) => complement(lensIsEmpty(lens))(obj);

export default curry(lensIsNotEmpty);
