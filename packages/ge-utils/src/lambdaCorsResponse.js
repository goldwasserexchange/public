import R from 'ramda';
import lambdaResponse from './lambdaResponse';

const addCorsHeaders = R.merge({ 'Access-Control-Allow-Origin': '*' });

const lambdaCorsResponse = (statusCode, body, headers) =>
  lambdaResponse(statusCode, body, addCorsHeaders(headers));

export default lambdaCorsResponse;
