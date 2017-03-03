import test from 'ava';
import renameKeys from '../src/renameKeys';

test('renameKeys', (t) => {
  const mapping = { a: 'b', b: 'c' };
  const obj = { a: 1, b: 2, d: 3 };
  const expected = { b: 1, c: 2, d: 3 };
  t.deepEqual(renameKeys(mapping, obj), expected);
});
