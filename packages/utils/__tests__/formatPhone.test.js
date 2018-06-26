import formatPhone from '../src/formatPhone';

const expected = '+32477615361';

test('formatPhone with international phone number', () => {
  const phone = '+32 477 61.53.61';
  expect(formatPhone(phone)).toBe(expected);
});

test('formatPhone with local mobile phone number', () => {
  const phone = '0477/61.53.61';
  expect(formatPhone(phone)).toBe(expected);
});

test('formatPhone with local fix phone number', () => {
  const phone = '02/375.45.66';
  const local = '+3223754566';
  expect(formatPhone(phone)).toBe(local);
});

test('formatPhone with 00 prefix', () => {
  const phone = '0032 477 61.53.61';
  expect(formatPhone(phone)).toBe(expected);
});

test('formatPhone with 00 prefix and unknown format', () => {
  const phone = '0032 477 61.53.61.61.61.61';
  const digits = '0032477615361616161';
  expect(formatPhone(phone)).toBe(digits);
});

test('formatPhone with unknown format', () => {
  const phone = '477 61.50.61';
  const digits = '477615061';
  expect(formatPhone(phone)).toBe(digits);
});

test('formatPhone with 0 prefix and unknown format', () => {
  const phone = '0477 61.50.61.62';
  const digits = '047761506162';
  expect(formatPhone(phone)).toBe(digits);
});
