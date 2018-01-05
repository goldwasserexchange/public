import stringModulo from '../src/stringModulo';

test('stringModulo', () => {
  const dividend = '3214282912345698765432161182';
  const divisor = 97;
  expect(stringModulo(dividend, divisor)).toBe(1);
});

test('stringModulo with string divisor', () => {
  const dividend = '3214282912345698765432161182';
  const divisor = '97';
  expect(stringModulo(dividend, divisor)).toBe(1);
});

test('stringModulo zero', () => {
  const dividend = '97';
  const divisor = 97;
  expect(stringModulo(dividend, divisor)).toBe(0);
});
