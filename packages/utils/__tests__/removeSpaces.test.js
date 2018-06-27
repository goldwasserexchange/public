import removeSpaces from '../src/removeSpaces';

test('removeWhiteSpaces', () => {
  const s = 'A56 54 879    @';
  const expected = 'A5654879@';
  expect(removeSpaces(s)).toBe(expected);
});
