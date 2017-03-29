import formatPhone from '../src/formatPhone';

const expected = '+32477615361';

test('formatPhone with international phone number', () => {
  const phone = '+32 477 61.53.61';
  expect(formatPhone(phone)).toBe(expected);
});

test('formatPhone with local phone number', () => {
  const phone = '0477/61.53.61';
  expect(formatPhone(phone)).toBe(expected);
});

test('formatPhone with 00 prefix', () => {
  const phone = '0032 477 61.53.61';
  expect(formatPhone(phone)).toBe(expected);
});
