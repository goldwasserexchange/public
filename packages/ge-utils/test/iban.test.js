import { format, valid } from '../src/iban';

const iban = 'be54 21 0029987297';

test('format', () => {
  const expected = 'BE54 2100 2998 7297';
  expect(format(iban)).toBe(expected);
});

test('valid with valid iban', () => {
  expect(valid(iban)).toBe(true);
});

test('valid with invalid iban', () => {
  const invalidIban = 'BE54210029987296';
  expect(valid(invalidIban)).toBe(false);
});
