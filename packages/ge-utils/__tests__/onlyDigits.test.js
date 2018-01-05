import onlyDigits from '../src/onlyDigits';

test('onlyDigits', () => {
  const string = '123A_879456/8@';
  const expected = '1238794568';
  expect(onlyDigits(string)).toBe(expected);
});
