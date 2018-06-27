import mergeWithConcat from '../src/mergeWithConcat';

test('mergeWithConcat', () => {
  const o = { a: [0], b: [1] };
  const o1 = { a: [2], c: [3] };
  const expected = { a: [0, 2], b: [1], c: [3] };
  expect(mergeWithConcat(o, o1)).toEqual(expected);
});
