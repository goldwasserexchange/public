import {
  pipe, props, values, zipObj, keys,
} from 'ramda';

const zipMapping = (mapping) => pipe(
  props(values(mapping)),
  zipObj(keys(mapping))
);

export default zipMapping;
