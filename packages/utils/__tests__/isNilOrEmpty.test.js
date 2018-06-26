import isNilOrEmpty from '../src/isNilOrEmpty';

test('empty string isNilOrEmpty', () => {
  const s = '';
  const expected = true;
  expect(isNilOrEmpty(s)).toBe(expected);
});

test('empty array isNilOrEmpty', () => {
  const a = [];
  const expected = true;
  expect(isNilOrEmpty(a)).toBe(expected);
});

test('empty object isNilOrEmpty', () => {
  const o = {};
  const expected = true;
  expect(isNilOrEmpty(o)).toBe(expected);
});

test('undefined isNilOrEmpty', () => {
  const undef = undefined;
  const expected = true;
  expect(isNilOrEmpty(undef)).toBe(expected);
});

test('null isNilOrEmpty', () => {
  const nullValue = null;
  const expected = true;
  expect(isNilOrEmpty(nullValue)).toBe(expected);
});

test('0 not isNilOrEmpty', () => {
  const zero = 0;
  const expected = false;
  expect(isNilOrEmpty(zero)).toBe(expected);
});

test('string not isNilOrEmpty', () => {
  const s = 'test';
  const expected = false;
  expect(isNilOrEmpty(s)).toBe(expected);
});

test('object not isNilOrEmpty', () => {
  const o = { test: 'test' };
  const expected = false;
  expect(isNilOrEmpty(o)).toBe(expected);
});

test('array not isNilOrEmpty', () => {
  const a = ['test', 'test'];
  const expected = false;
  expect(isNilOrEmpty(a)).toBe(expected);
});

test('object faking array not isNilOrEmpty', () => {
  const o = { length: 0 };
  const expected = false;
  expect(isNilOrEmpty(o)).toBe(expected);
});
