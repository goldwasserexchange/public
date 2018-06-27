import etag from './etag';

const httpSuccess = code => code >= 200 && code < 300;

const lambdaResponse = (statusCode, body, resHeaders, reqHeaders) => {
  const response = { statusCode };

  if (resHeaders) response.headers = resHeaders;

  if (body) {
    const bodyString = JSON.stringify(body);
    const tag = etag(bodyString);

    if (httpSuccess(statusCode) && reqHeaders && reqHeaders['If-None-Match'] === tag) response.statusCode = 304;
    else response.body = bodyString;

    response.headers = Object.assign({}, response.headers, { ETag: tag });
  }

  return response;
};

export default lambdaResponse;
