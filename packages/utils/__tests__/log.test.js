/* eslint-disable no-console */
import log from '../src/log';

console.log = jest.fn();

test('log with object', () => {
  const data = { key: 'value' };
  log('Title', data);
  expect(console.log).toHaveBeenLastCalledWith(`Title: ${JSON.stringify(data)}`);
});

test('log with error', () => {
  const data = new Error('error');
  log('Title', data);
  expect(console.log).toHaveBeenLastCalledWith(`Title: ${data}`);
});
