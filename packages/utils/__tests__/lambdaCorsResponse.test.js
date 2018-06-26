import lambdaCorsResponse from '../src/lambdaCorsResponse';

test('lambdaCorsResponse', () => {
  const statusCode = 200;
  const body = { data: 'OK' };
  const headers = { 'Cache-Control': 'no-cache' };
  expect(lambdaCorsResponse(statusCode, body, headers)).toHaveProperty('headers.Access-Control-Allow-Origin', '*');
});
