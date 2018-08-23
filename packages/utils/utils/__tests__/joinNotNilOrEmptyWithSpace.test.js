import joinNotNilOrEmptyWithSpace from '../src/joinNotNilOrEmptyWithSpace';

test('joinNotNilOrEmptyWithSpace', () => {
  const a = ['', [], {}, undefined, null, 0, 'test'];
  const expected = '0 test';
  expect(joinNotNilOrEmptyWithSpace(a)).toBe(expected);
});
