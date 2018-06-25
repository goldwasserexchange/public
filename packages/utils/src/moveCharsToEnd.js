import { curry, drop, take } from 'ramda';

export default curry((n, s) => `${drop(n, s)}${take(n, s)}`);
