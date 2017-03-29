import R from 'ramda';
import lambdaCorsResponse from '../src/lambdaCorsResponse';

test('lambdaCorsResponse', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = { 'Cache-Control': 'no-cache' };
  const expectedHeaders = R.assoc('Access-Control-Allow-Origin', '*', headers);
  expect(lambdaCorsResponse(statusCode, body, headers)).toEqual({
    statusCode,
    body: JSON.stringify(body),
    headers: expectedHeaders,
  });
});
