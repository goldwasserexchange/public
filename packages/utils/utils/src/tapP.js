import { curry } from 'ramda';

export default curry((fn, x) => fn(x).then(() => x));
