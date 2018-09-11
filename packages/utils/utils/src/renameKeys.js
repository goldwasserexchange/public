import {
  curry, reduce, assoc, keys,
} from 'ramda';

export default curry((keysMap, obj) => reduce(
  (acc, key) => assoc(keysMap[key] || key, obj[key], acc),
  {},
  keys(obj)
));
