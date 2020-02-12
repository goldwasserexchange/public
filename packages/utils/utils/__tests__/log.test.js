/* eslint-disable no-console */
import { serializeError } from 'serialize-error';
import log from '../src/log';

console.log = jest.fn();

test('log with object', () => {
  const data = { key: 'value' };
  log('Title', data);
  expect(console.log).toHaveBeenLastCalledWith(`Title: ${JSON.stringify(data)}`);
});

test('log with error', () => {
  const data = new Error('error');
  data.statusCode = 404;
  log('Title', data);
  expect(console.log).toHaveBeenLastCalledWith(`Title: ${JSON.stringify(serializeError(data))}`);
});

test('log with title only', () => {
  log('Title only');
  expect(console.log).toHaveBeenLastCalledWith('Title only');
});
