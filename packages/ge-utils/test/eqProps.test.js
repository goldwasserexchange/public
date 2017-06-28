import eqProps from '../src/eqProps';

test('eqProps equal', () => {
  const o1 = { a: 5, b: 6 };
  const o2 = { a: 5, b: 6 };
  expect(eqProps(['a', 'b'], o1, o2)).toBe(true);
});

test('eqProps equal curried', () => {
  const o1 = { a: 5, b: 6 };
  const o2 = { a: 5, b: 6 };
  expect(eqProps(['a', 'b'])(o1, o2)).toBe(true);
});

test('eqProps not equal', () => {
  const o1 = { a: 5, b: 6 };
  const o2 = { a: 5, b: 5 };
  expect(eqProps(['a', 'b'], o1, o2)).toBe(false);
});

test('eqProps missing prop', () => {
  const o1 = { a: 5, b: 6 };
  const o2 = { a: 5 };
  expect(eqProps(['a', 'b'], o1, o2)).toBe(false);
});

test('eqProps missing prop in both', () => {
  const o1 = { a: 5, b: 6 };
  const o2 = { a: 5, b: 6 };
  expect(eqProps(['c'], o1, o2)).toBe(false);
});

test('eqProps empty objects', () => {
  const o1 = {};
  const o2 = {};
  expect(eqProps(['a'], o1, o2)).toBe(false);
});
