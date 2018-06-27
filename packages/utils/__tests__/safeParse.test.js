import safeParse from '../src/safeParse';

test('safeParse with JSON string', () => {
  const json = '{ "key1": "value1", "key2": false}';
  const expected = { key1: 'value1', key2: false };
  expect(safeParse(json)).toEqual(expected);
});

test('safeParse with non JSON', () => {
  const json = '{ "key1": value1 }';
  const expected = undefined;
  expect(safeParse(json)).toEqual(expected);
});
