import { unless, is, always, curry } from 'ramda';

const defaultToEmptyString = unless(is(String), always(''));

export default curry((a, b) => defaultToEmptyString(a).localeCompare(defaultToEmptyString(b)));
