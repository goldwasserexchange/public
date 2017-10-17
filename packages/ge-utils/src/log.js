import * as R from 'ramda';
import stringify from 'json-stringify-safe';

export default R.curry((title, data) => // eslint-disable-next-line no-console
  console.log(`${title}: ${stringify(data)}`));
