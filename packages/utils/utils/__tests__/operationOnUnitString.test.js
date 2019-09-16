import operationOnUnitString from '../src/operationOnUnitString';

test('operationOnUnitString no curry', () => {
  const string = '1em';
  const double = (x) => x * 2;
  const expected = '2em';
  expect(operationOnUnitString(double, string)).toBe(expected);
});

test('operationOnUnitString curry', () => {
  const string = '1em';
  const double = (x) => x * 2;
  const expected = '2em';
  expect(operationOnUnitString(double)(string)).toBe(expected);
});
