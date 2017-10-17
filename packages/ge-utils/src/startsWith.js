import * as R from 'ramda';

const startsWith = s => R.compose(R.equals(s), R.take(R.length(s)));

export default startsWith;
