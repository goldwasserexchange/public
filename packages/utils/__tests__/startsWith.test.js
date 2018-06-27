import startsWith from '../src/startsWith';

test('startsWith', () => {
  const string = 'This is a string';
  const startsWithThis = startsWith('This');
  expect(startsWithThis(string)).toBe(true);
});
