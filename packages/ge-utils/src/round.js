import { curry } from 'ramda';

export default curry((d, f) => Math.round(f * (10 ** d)) / (10 ** d));
