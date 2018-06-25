import { curry, filter, compose, equals, length } from 'ramda';

export default curry((len, list) => filter(compose(equals(len), length), list));
