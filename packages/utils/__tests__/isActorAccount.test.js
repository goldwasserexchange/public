import isActorAccount from '../src/isActorAccount';

test('isActorAccount with valid account', () => {
  const account = '100/0002465/74';
  expect(isActorAccount(account)).toBe(true);
});

test('isActorAccount with invalid account', () => {
  const account = '1000/002465/74';
  expect(isActorAccount(account)).toBe(false);
});
