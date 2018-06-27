import lambdaResponse from '../src/lambdaResponse';
import etag from '../src/etag';

test('statusCode only', () => {
  const statusCode = 200;
  expect(lambdaResponse(statusCode)).toEqual({ statusCode });
});

test('statusCode and headers', () => {
  const statusCode = 200;
  const resHeaders = { 'Cache-Control': 'no-cache' };
  expect(lambdaResponse(statusCode, null, resHeaders)).toEqual({ statusCode, headers: resHeaders });
});

test('statusCode and body', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const resHeaders = { ETag: etag(JSON.stringify(body)) };
  expect(lambdaResponse(statusCode, body)).toEqual({
    statusCode,
    body: JSON.stringify(body),
    headers: resHeaders,
  });
});

test('statusCode, body and headers', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const resHeaders = {
    'Cache-Control': 'no-cache',
    ETag: etag(JSON.stringify(body)),
  };
  expect(lambdaResponse(statusCode, body, resHeaders)).toEqual({
    statusCode,
    body: JSON.stringify(body),
    headers: resHeaders,
  });
});

test('statusCode, body, headers and matching ifNoneMatch', () => {
  const statusCode = 200;
  const expectedStatusCode = 304;
  const body = { data: 'OK' };
  const tag = etag(JSON.stringify(body));
  const resHeaders = {
    'Cache-Control': 'private',
    ETag: tag,
  };
  const reqHeaders = {
    'If-None-Match': tag,
  };
  expect(lambdaResponse(statusCode, body, resHeaders, reqHeaders)).toEqual({
    statusCode: expectedStatusCode,
    headers: resHeaders,
  });
});

test('statusCode, body, headers and unmatching ifNoneMatch', () => {
  const statusCode = 200;
  const expectedStatusCode = 200;
  const oldBody = { data: 'old' };
  const newBody = { data: 'new' };
  const resHeaders = {
    'Cache-Control': 'private',
    ETag: etag(JSON.stringify(newBody)),
  };
  const reqHeaders = {
    'If-None-Match': etag(JSON.stringify(oldBody)),
  };
  expect(lambdaResponse(statusCode, newBody, resHeaders, reqHeaders)).toEqual({
    statusCode: expectedStatusCode,
    body: JSON.stringify(newBody),
    headers: resHeaders,
  });
});
