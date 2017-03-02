import R from 'ramda';

const zipMapping = mapping => R.pipe(
  R.props(R.values(mapping)),
  R.zipObj(R.keys(mapping))
);

export default zipMapping;
