import roundObject from '../src/roundObject';

test('roundObject', () => {
  const d = 2;
  const object = [1.23456, { b: 4.789456 }, 'text'];
  const expected = [1.23, { b: 4.79 }, 'text'];
  expect(roundObject(d, object)).toEqual(expected);
});
