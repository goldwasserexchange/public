import R from 'ramda';

export default R.tryCatch(R.head, R.always(undefined));
