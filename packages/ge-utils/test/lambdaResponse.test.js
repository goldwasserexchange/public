import lambdaResponse from '../src/lambdaResponse';

test('statusCode only', () => {
  const statusCode = 200;
  expect(lambdaResponse(statusCode)).toEqual({ statusCode });
});

test('statusCode and body', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  expect(lambdaResponse(statusCode, body)).toEqual({
    statusCode,
    body: JSON.stringify(body),
  });
});

test('statusCode, body and headers', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = { 'Cache-Control': 'no-cache' };
  expect(lambdaResponse(statusCode, body, headers)).toEqual({
    statusCode,
    body: JSON.stringify(body),
    headers,
  });
});
