import actorAccountCommunication from '../src/actorAccountCommunication';

test('actorAccountCommunication', () => {
  const account = '100/0002465/74';
  const comm = '+++ 100 / 0002 / 46574 +++';
  expect(actorAccountCommunication(account)).toBe(comm);
});
