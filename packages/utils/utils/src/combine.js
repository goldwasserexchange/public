import {
  curry, pipe, reduceBy, mergeWithKey, values,
} from 'ramda';

export default curry((keyFn, mergeFn, list) => pipe(
  reduceBy(mergeWithKey(mergeFn), {}, keyFn),
  values
)(list));
