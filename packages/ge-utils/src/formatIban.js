import R from 'ramda';

export default R.compose(R.toUpper, R.join(' '), R.splitEvery(4), R.replace(/\s/g, ''));
