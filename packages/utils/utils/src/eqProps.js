import {
  curry, reduce, has, eqProps,
} from 'ramda';

export default curry((props, a, b) => reduce(
  (acc, k) => acc && has(k, a) && has(k, b) && eqProps(k, a, b),
  true,
  props
));
