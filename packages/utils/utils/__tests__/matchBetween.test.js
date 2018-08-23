import matchBetween from '../src/matchBetween';

test('matchBetween', () => {
  const string = `this is a {{test}} with {{tags}}
  on multiple {{lines}}`;
  const expected = ['test', 'tags', 'lines'];
  expect(matchBetween('{{', '}}')(string)).toEqual(expected);
});
