import * as R from 'ramda';
import lambdaResponse from './lambdaResponse';

const addCorsHeaders = R.merge({ 'Access-Control-Allow-Origin': '*' });

const lambdaCorsResponse = (statusCode, body, resHeaders, reqHeaders) =>
  lambdaResponse(statusCode, body, addCorsHeaders(resHeaders), reqHeaders);

export default lambdaCorsResponse;
