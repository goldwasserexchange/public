import actorAccountMod from '../src/actorAccountMod';

test('actorAccountMod', () => {
  const account = '100/0002465/74';
  const expected = 74;
  expect(actorAccountMod(account)).toBe(expected);
});
