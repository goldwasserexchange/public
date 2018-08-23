import { pipe, when, is } from 'ramda';
import stringify from 'json-stringify-safe';
import serializeError from 'serialize-error';

export default (title, data = '') => pipe(
  when(is(Error), serializeError),
  stringify,
  s => console.log(`${title}${data ? `: ${s}` : ''}`) // eslint-disable-line no-console
)(data);
