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
} = {}) => handler => async (event, context, callback) => {
  try {
    if (returnEarly(event)) return event;

    if (logEvent({ event })) logger('Event', logEventTransform(event));

    const validEvent = await validateEvent(event);

    if (logValidEvent({ event, validEvent })) logger('Valid event', logValidEventTransform(validEvent));

    const response = await handler(validEvent, context, callback);

    if (logResponse({ event, validEvent, response })) logger('Response', logResponseTransform(response));

    return response;
  } catch (err) {
    if (logError({ event, err })) logger('Error', logErrorTransform(err));

    if (rethrow({ event, err })) throw err; // Rejects with the err

    return err; // Resolves with the err
  }
};

export default lambdaHandler;
