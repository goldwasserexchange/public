import {
  compose, equals, take, length,
} from 'ramda';

const startsWith = s => compose(equals(s), take(length(s)));

export default startsWith;
