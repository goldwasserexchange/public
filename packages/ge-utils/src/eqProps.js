import * as R from 'ramda';

export default R.curry((props, a, b) => R.reduce(
  (acc, k) => acc && R.has(k, a) && R.has(k, b) && R.eqProps(k, a, b),
  true,
  props
));
