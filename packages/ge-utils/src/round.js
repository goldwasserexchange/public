import * as R from 'ramda';

// eslint-disable-next-line no-restricted-properties
export default R.curry((d, f) => Math.round(f * Math.pow(10, d)) / Math.pow(10, d));
