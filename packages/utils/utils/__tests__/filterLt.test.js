import filterLt from '../src/filterLt';

test('filterLt', () => {
  const a = [1, 2, 3, 4, 5];
  const expected = [4, 5];
  expect(filterLt(3)(a)).toEqual(expected);
});
