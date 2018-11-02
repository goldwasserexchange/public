import { T, F, identity } from 'ramda';

import log from './log';

const lambdaHandler = ({
  returnEarly = F,
  logger = log,
  logEvent = T,
  logEventTransform = identity,
  validateEvent = identity,
  logValidEvent = validateEvent === identity ? F : T,
  logValidEventTransform = identity,
  logResponse = T,
  logResponseTransform = identity,
  logError = T,
  logErrorTransform = identity,
  rethrow = F,
  errorTransform = ({ error }) => error,
} = {}) => handler => async (event, context, callback) => {
  try {
    if (returnEarly(event)) return event;

    if (logEvent({ event })) logger('Event', logEventTransform(event));

    const validEvent = await validateEvent(event);

    if (logValidEvent({ event, validEvent })) logger('Valid event', logValidEventTransform(validEvent));

    const response = await handler(validEvent, context, callback);

    if (logResponse({ event, validEvent, response })) logger('Response', logResponseTransform(response));

    return response;
  } catch (error) { // eslint-disable-line unicorn/catch-error-name
    if (logError({ event, error })) logger('Error', logErrorTransform(error));

    if (rethrow({ event, error })) throw errorTransform({ event, error }); // Rejects

    return errorTransform({ event, error }); // Resolves
  }
};

export default lambdaHandler;
