import filterLength from '../src/filterLength';

test('filterLength', () => {
  const len = 4;
  const list = [
    [1, 2],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [1, 2, 3],
    [0, 0, 0, 0],
    'test',
  ];
  const expected = [[1, 2, 3, 4], [0, 0, 0, 0], 'test'];
  expect(filterLength(len, list)).toEqual(expected);
});
