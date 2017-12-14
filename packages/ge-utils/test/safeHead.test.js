import safeHead from '../src/safeHead';

test('safeHead with string', () => {
  const string = 'abcdef';
  expect(safeHead(string)).toBe('a');
});

test('safeHead with list', () => {
  const list = ['a', 'b', 'c', 'd', 'e', 'f'];
  expect(safeHead(list)).toBe('a');
});

test('safeHead with empty list', () => {
  const list = [];
  expect(safeHead(list)).toBeUndefined();
});

test('safeHead with neither string nor list', () => {
  expect(safeHead(true)).toBeUndefined();
});
