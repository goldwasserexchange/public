
import { map } from 'ramda';

module.exports = map(regexString => new RegExp(regexString));
