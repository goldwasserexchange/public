import { lensProp, compose, lens } from 'ramda';

export const httpMethod = lensProp('httpMethod');

export const headers = lensProp('headers');

export const queryStringParameters = lensProp('queryStringParameters');

export const pathParameters = lensProp('pathParameters');

export const requestContext = lensProp('requestContext');
export const authorizer = compose(requestContext, lensProp('authorizer'));
export const claims = compose(authorizer, lensProp('claims'));

export const iatClaim = compose(claims, lensProp('iat'));
export const iatClaimDate = compose(iatClaim, lens((iat) => new Date(iat), (date) => date.toString()));

export const body = lensProp('body');
