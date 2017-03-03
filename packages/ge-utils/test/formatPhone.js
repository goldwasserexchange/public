import test from 'ava';
import formatPhone from '../src/formatPhone';

const expected = '+32477615361';

test('formatPhone with international phone number', (t) => {
  const phone = '+32 477 61.53.61';
  t.is(formatPhone(phone), expected);
});

test('formatPhone with local phone number', (t) => {
  const phone = '0477/61.53.61';
  t.is(formatPhone(phone), expected);
});

test('formatPhone with 00 prefix', (t) => {
  const phone = '0032 477 61.53.61';
  t.is(formatPhone(phone), expected);
});
