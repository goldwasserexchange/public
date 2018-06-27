import {
  mergeWith,
  concat,
} from 'ramda';

const mergeWithConcat = mergeWith(concat);

export default mergeWithConcat;
