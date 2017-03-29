import formatIban from '../src/formatIban';

test('formatIban', () => {
  const iban = 'be54 21 0029987297';
  const expected = 'BE54 2100 2998 7297';
  expect(formatIban(iban)).toBe(expected);
});
