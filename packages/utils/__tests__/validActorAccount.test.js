import validActorAccount from '../src/validActorAccount';

test('validActorAccount with valid account', () => {
  const account = '100/0002465/74';
  expect(validActorAccount(account)).toBe(true);
});

test('validActorAccount with invalid account', () => {
  const account = 'abc';
  expect(validActorAccount(account)).toBe(false);
});

test('validActorAccount with invalid account number', () => {
  const account = '100/0002465/73';
  expect(validActorAccount(account)).toBe(false);
});

