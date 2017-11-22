import { either, isNil, isEmpty } from 'ramda';

export default either(isNil, isEmpty);