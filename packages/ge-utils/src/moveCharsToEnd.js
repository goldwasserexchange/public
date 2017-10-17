import * as R from 'ramda';

export default R.curry((n, s) => `${R.drop(n, s)}${R.take(n, s)}`);
