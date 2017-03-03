const lambdaResponse = (statusCode, body, headers) => {
  const response = { statusCode };

  if (body) response.body = JSON.stringify(body);

  if (headers) response.headers = headers;

  return response;
};

export default lambdaResponse;
