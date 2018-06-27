import zipMapping from '../src/zipMapping';

test('zipMapping', () => {
  const list = [0, 5, 10, 15];
  const mapping = { A: 1, B: 3 };
  const expected = { A: 5, B: 15 };
  expect(zipMapping(mapping)(list)).toEqual(expected);
});
