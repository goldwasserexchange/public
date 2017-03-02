import R from 'ramda';

export default R.tryCatch(JSON.parse, R.always(undefined));
