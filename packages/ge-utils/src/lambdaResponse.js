import etag from './etag';

const lambdaResponse = (statusCode, body, headers) => {
  const response = { statusCode };

  if (headers) response.headers = headers;

  if (body) {
    const bodyString = JSON.stringify(body);
    response.body = bodyString;
    response.headers = Object.assign({}, response.headers, { ETag: etag(bodyString) });
  }

  return response;
};

export default lambdaResponse;
