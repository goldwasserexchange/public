import validIban from '../src/validIban';

test('validIban with valid iban', () => {
  const iban = 'be54 21 0029987297';
  expect(validIban(iban)).toBe(true);
});

test('validIban with invalid iban', () => {
  const iban = 'BE54210029987296';
  expect(validIban(iban)).toBe(false);
});
