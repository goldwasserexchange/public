import test from 'ava';
import startsWith from '../src/startsWith';

test('startsWith', (t) => {
  const string = 'This is a string';
  const startsWithThis = startsWith('This');
  t.true(startsWithThis(string));
});
