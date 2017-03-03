import test from 'ava';
import safeParse from '../src/safeParse';

test('safeParse with JSON string', (t) => {
  const json = '{ "key1": "value1", "key2": false}';
  const expected = { key1: 'value1', key2: false };
  t.deepEqual(safeParse(json), expected);
});

test('safeParse with non JSON', (t) => {
  const json = '{ "key1": value1 }';
  const expected = undefined;
  t.is(safeParse(json), expected);
});
