import { isAccount, mod, modValid, valid } from '../src/actorAccount';

const account = '100/0002465/74';

test('isAccount with valid account', () => {
  expect(isAccount(account)).toBe(true);
});

test('isAccount with invalid account', () => {
  const invalidAccount = '1000/002465/74';
  expect(isAccount(invalidAccount)).toBe(false);
});

test('mod', () => {
  expect(mod(account)).toBe(74);
});

test('modValid with valid account', () => {
  expect(modValid(account)).toBe(true);
});

test('modValid with invalid account', () => {
  const invalidAccount = '100/0002465/73';
  expect(modValid(invalidAccount)).toBe(false);
});

test('valid with valid account', () => {
  expect(valid(account)).toBe(true);
});

test('valid with valid account', () => {
  const invalidAccount = '100/0002465/73';
  expect(valid(invalidAccount)).toBe(false);
});
