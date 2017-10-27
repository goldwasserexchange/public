import { curry } from 'ramda';
import stringify from 'json-stringify-safe';

export default curry((title, data) => // eslint-disable-next-line no-console
  console.log(`${title}: ${stringify(data)}`));
