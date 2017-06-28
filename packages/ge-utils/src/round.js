import R from 'ramda';

export default R.curry((d, f) => Math.round(f * (10 ** d)) / (10 ** d));
