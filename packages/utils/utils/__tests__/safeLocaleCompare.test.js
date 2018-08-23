import safeLocaleCompare from '../src/safeLocaleCompare';

const a = 'hello';
const b = 'world';

test('safeLocaleCompare is curried', () => {
  expect(safeLocaleCompare(a)).toBeInstanceOf(Function);
});

test('safeLocaleCompare with strings that should return -1', () => {
  expect(safeLocaleCompare(a, b)).toBe(-1);
});

test('safeLocaleCompare with strings that should return 1', () => {
  expect(safeLocaleCompare(b, a)).toBe(1);
});

test('safeLocaleCompare with "a" null', () => {
  expect(safeLocaleCompare(null, b)).toBe(-1);
});

test('safeLocaleCompare with "a" undefined', () => {
  expect(safeLocaleCompare(undefined, b)).toBe(-1);
});

test('safeLocaleCompare with "a" true', () => {
  expect(safeLocaleCompare(true, b)).toBe(-1);
});

test('safeLocaleCompare with "a" false', () => {
  expect(safeLocaleCompare(false, b)).toBe(-1);
});

test('safeLocaleCompare with "a" object', () => {
  expect(safeLocaleCompare({ a }, b)).toBe(-1);
});

test('safeLocaleCompare with "b" null', () => {
  expect(safeLocaleCompare(a, null)).toBe(1);
});

test('safeLocaleCompare with "b" undefined', () => {
  expect(safeLocaleCompare(a, undefined)).toBe(1);
});

test('safeLocaleCompare with "b" true', () => {
  expect(safeLocaleCompare(a, true)).toBe(1);
});

test('safeLocaleCompare with "b" false', () => {
  expect(safeLocaleCompare(a, false)).toBe(1);
});

test('safeLocaleCompare with "b" object', () => {
  expect(safeLocaleCompare(a, { b })).toBe(1);
});
