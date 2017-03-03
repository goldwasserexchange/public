import test from 'ava';
import awsEvent from '../src/awsEvent';

test('awsEvent', (t) => {
  const obj = { test: 'ok' };
  const event = {
    Records: [
      { service: obj },
    ],
  };
  t.deepEqual(awsEvent('service')(event), obj);
});
