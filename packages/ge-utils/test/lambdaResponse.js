import test from 'ava';
import lambdaResponse from '../src/lambdaResponse';

test('statusCode only', (t) => {
  const statusCode = 200;
  t.deepEqual(lambdaResponse(statusCode), { statusCode });
});

test('statusCode and body', (t) => {
  const statusCode = 200;
  const body = { data: 'OK' };
  t.deepEqual(lambdaResponse(statusCode, body), {
    statusCode,
    body: JSON.stringify(body),
  });
});

test('statusCode, body and headers', (t) => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = { 'Cache-Control': 'no-cache' };
  t.deepEqual(lambdaResponse(statusCode, body, headers), {
    statusCode,
    body: JSON.stringify(body),
    headers,
  });
});
