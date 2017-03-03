import test from 'ava';
import R from 'ramda';
import lambdaCorsResponse from '../src/lambdaCorsResponse';

test('lambdaCorsResponse', (t) => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = { 'Cache-Control': 'no-cache' };
  const expectedHeaders = R.assoc('Access-Control-Allow-Origin', '*', headers);
  t.deepEqual(lambdaCorsResponse(statusCode, body, headers), {
    statusCode,
    body: JSON.stringify(body),
    headers: expectedHeaders,
  });
});
