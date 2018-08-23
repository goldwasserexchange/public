import moveCharsToEnd from '../src/moveCharsToEnd';

test('moveCharsToEnd curry', () => {
  expect(typeof moveCharsToEnd(1)).toBe('function');
});

test('moveCharsToEnd', () => {
  const s = '12345678';
  const n = 5;
  const expected = '67812345';
  expect(moveCharsToEnd(n, s)).toBe(expected);
});
