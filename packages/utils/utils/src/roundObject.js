import {
  curry, type, map, pipe, keys, reduce, assoc, prop,
} from 'ramda';
import round from './round';

const roundObject = curry((d, obj) => {
  switch (type(obj)) {
    case 'Array':
      return map(roundObject(d), obj);
    case 'Object':
      return pipe(
        keys,
        reduce((acc, key) => assoc(key, roundObject(d, prop(key, obj)), acc), {})
      )(obj);
    case 'Number':
      return round(d, obj);
    default:
      return obj;
  }
});

export default roundObject;
