import {
  curry, compose, flatten, groupBy, values,
} from 'ramda';

export default curry((fn, list) => compose(values, groupBy(fn), flatten)(list));
