import awsEvent from '../src/awsEvent';

test('awsEvent', () => {
  const obj = { test: 'ok' };
  const event = {
    Records: [
      { service: obj },
    ],
  };
  expect(awsEvent('service')(event)).toEqual(obj);
});
