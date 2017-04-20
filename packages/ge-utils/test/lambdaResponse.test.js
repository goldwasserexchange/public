import lambdaResponse from '../src/lambdaResponse';
import etag from '../src/etag';

test('statusCode only', () => {
  const statusCode = 200;
  expect(lambdaResponse(statusCode)).toEqual({ statusCode });
});

test('statusCode and headers', () => {
  const statusCode = 200;
  const headers = { 'Cache-Control': 'no-cache' };
  expect(lambdaResponse(statusCode, null, headers)).toEqual({ statusCode, headers });
});

test('statusCode and body', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = { ETag: etag(JSON.stringify(body)) };
  expect(lambdaResponse(statusCode, body)).toEqual({
    statusCode,
    body: JSON.stringify(body),
    headers,
  });
});

test('statusCode, body and headers', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = {
    'Cache-Control': 'no-cache',
    ETag: etag(JSON.stringify(body)),
  };
  expect(lambdaResponse(statusCode, body, headers)).toEqual({
    statusCode,
    body: JSON.stringify(body),
    headers,
  });
});
