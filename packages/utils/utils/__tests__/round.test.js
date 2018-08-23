import round from '../src/round';

test('round', () => {
  expect(round(4, 1.2456789)).toBe(1.2457);
});

test('round curried', () => {
  expect(round(4)(1.2456789)).toBe(1.2457);
});
