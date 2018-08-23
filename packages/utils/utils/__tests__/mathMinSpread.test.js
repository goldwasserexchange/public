import mathMinSpread from '../src/mathMinSpread';

test('mathMinSpread', () => {
  const a = [5, 4, 1, 2, 3];
  const expected = 1;
  expect(mathMinSpread(a)).toBe(expected);
});
