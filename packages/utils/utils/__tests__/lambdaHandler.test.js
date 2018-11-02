import {
  T, F, dissoc, identity,
} from 'ramda';
import lambdaHandler from '../src/lambdaHandler';
import log from '../src/log';

jest.mock('../src/log');

const response = 'response';
const handler = jest.fn(() => response);
const event = { a: 1, b: 2 };
const validEvent = { a: 1, b: 2, c: 3 };
const validateEvent = jest.fn(() => validEvent);
const context = { context: 'context' };
const callback = jest.fn();

const error = new Error('UnkownError');
const errorHandler = () => Promise.reject(error);

const logger = jest.fn();

describe('lambdaHandler', () => {
  describe('function', () => {
    it('should return a function', () => {
      expect(typeof lambdaHandler()).toBe('function');
    });
  });

  describe('early return', () => {
    it('should check for early return', async () => {
      const returnEarly = jest.fn();
      await lambdaHandler({ returnEarly })(handler)(event);
      expect(returnEarly).toHaveBeenCalledWith(event);
    });

    it('should not return early by default', async () => {
      const logEvent = jest.fn();
      await lambdaHandler({ logEvent })(handler)(event);
      expect(logEvent).toHaveBeenCalled();
    });

    it('should return early with the event', async () => {
      const returnEarly = jest.fn(T);
      const resp = await lambdaHandler({ returnEarly })(handler)(event);
      expect(resp).toBe(event);
    });
  });

  describe('logger', () => {
    it('should use log by default', async () => {
      await lambdaHandler()(handler)(event);
      expect(log).toHaveBeenCalled();
    });
  });

  describe('event log', () => {
    it('should check for log', async () => {
      const logEvent = jest.fn();
      await lambdaHandler({ logEvent })(handler)(event);
      expect(logEvent).toHaveBeenCalledWith({ event });
    });

    it('should log the event by default', async () => {
      await lambdaHandler({ logger })(handler)(event);
      expect(logger).toHaveBeenCalledWith('Event', event);
    });

    it('should not log the event', async () => {
      const logEvent = F;
      await lambdaHandler({ logger, logEvent })(handler)(event);
      expect(logger).not.toHaveBeenCalledWith('Event', event);
    });

    it('should transform the event', async () => {
      const logEventTransform = jest.fn(dissoc('a'));
      await lambdaHandler({ logger, logEventTransform })(handler)(event);
      expect(logger).toHaveBeenCalledWith('Event', dissoc('a', event));
      expect(logEventTransform).toHaveBeenCalledWith(event);
    });
  });

  describe('event validation', () => {
    it('should validate the event', async () => {
      await lambdaHandler({ validateEvent })(handler)(event);
      expect(validateEvent).toHaveBeenCalledWith(event);
    });

    it('should validate with identity by default', async () => {
      await lambdaHandler()(handler)(event, context, callback);
      expect(handler).toHaveBeenCalledWith(event, context, callback);
    });

    it('should not call the handler if the event is invalid', async () => {
      validateEvent.mockRejectedValueOnce(new Error('ValidationError'));
      await lambdaHandler({ validateEvent })(handler)(event);
      expect(handler).not.toHaveBeenCalled();
    });
  });

  describe('validated event log', () => {
    it('should check for log', async () => {
      const logValidEvent = jest.fn();
      await lambdaHandler({ logValidEvent, validateEvent })(handler)(event);
      expect(logValidEvent).toHaveBeenCalledWith({ event, validEvent });
    });

    it('should log the event by default if validateEvent is not identity', async () => {
      await lambdaHandler({ logger, validateEvent })(handler)(event);
      expect(logger).toHaveBeenCalledWith('Valid event', validEvent);
    });

    it('should not log the event by default if validateEvent is identity', async () => {
      await lambdaHandler({ logger, validateEvent: identity })(handler)(event);
      expect(logger).not.toHaveBeenCalledWith('Valid event', validEvent);
    });

    it('should transform the valid event', async () => {
      const logValidEvent = T;
      const logValidEventTransform = jest.fn(dissoc('a'));
      await lambdaHandler({
        logger, validateEvent, logValidEvent, logValidEventTransform,
      })(handler)(event);
      expect(logger).toHaveBeenCalledWith('Valid event', dissoc('a', validEvent));
      expect(logValidEventTransform).toHaveBeenCalledWith(validEvent);
    });
  });

  describe('handler', () => {
    it('should call the handler with the valid event', async () => {
      await lambdaHandler({ validateEvent })(handler)(event, context, callback);
      expect(handler).toHaveBeenCalledWith(validEvent, context, callback);
    });

    it('should return the handler response', async () => {
      await lambdaHandler()(handler)(event);
      expect(response).toBe('response');
    });
  });

  describe('response log', () => {
    it('should check for log', async () => {
      const logResponse = jest.fn();
      await lambdaHandler({ logResponse })(handler)(event);
      expect(logResponse).toHaveBeenCalledWith({ event, validEvent: event, response });
    });

    it('should log the response by default', async () => {
      await lambdaHandler({ logger })(handler)(event);
      expect(logger).toHaveBeenCalledWith('Response', response);
    });

    it('should not log the response', async () => {
      const logResponse = F;
      await lambdaHandler({ logger, logResponse })(handler)(event);
      expect(logger).not.toHaveBeenCalledWith('Response', response);
    });

    it('should transform the response', async () => {
      const logResponseTransform = jest.fn(() => 'newResponse');
      await lambdaHandler({ logger, logResponseTransform })(handler)(event);
      expect(logger).toHaveBeenCalledWith('Response', 'newResponse');
      expect(logResponseTransform).toHaveBeenCalledWith(response);
    });
  });

  describe('error log', () => {
    it('should check for log', async () => {
      const logError = jest.fn();
      await lambdaHandler({ logError })(errorHandler)(event);
      expect(logError).toHaveBeenCalledWith({ event, error });
    });

    it('should log the error by default', async () => {
      await lambdaHandler({ logger })(errorHandler)(event);
      expect(logger).toHaveBeenCalledWith('Error', error);
    });

    it('should not log the error', async () => {
      const logError = F;
      await lambdaHandler({ logger, logError })(errorHandler)(event);
      expect(logger).not.toHaveBeenCalledWith('Error', error);
    });

    it('should transform the error', async () => {
      const logErrorTransform = jest.fn(() => 'error');
      await lambdaHandler({ logger, logErrorTransform })(errorHandler)(event);
      expect(logger).toHaveBeenCalledWith('Error', 'error');
      expect(logErrorTransform).toHaveBeenCalledWith(error);
    });
  });

  describe('rethrow', () => {
    it('should check for rethrow', async () => {
      const rethrow = jest.fn(F);
      await lambdaHandler({ rethrow })(errorHandler)(event);
      expect(rethrow).toHaveBeenCalledWith({ event, error });
    });

    it('should rethrow with error by default', async () => {
      const rethrow = jest.fn(T);
      await expect(lambdaHandler({ rethrow })(errorHandler)(event)).rejects.toEqual(error);
    });

    it('should transform the error', async () => {
      const rethrow = T;
      const errorTransform = jest.fn(() => event);
      await expect(lambdaHandler({ rethrow, errorTransform })(errorHandler)(event)).rejects.toEqual(event);
      expect(errorTransform).toHaveBeenCalledWith({ event, error });
    });
  });

  describe('error', () => {
    it('should return error by default', async () => {
      const resp = await lambdaHandler()(errorHandler)(event);
      expect(resp).toEqual(error);
    });

    it('should transform the error', async () => {
      const errorTransform = jest.fn(() => event);
      const resp = await lambdaHandler({ errorTransform })(errorHandler)(event);
      expect(resp).toEqual(event);
      expect(errorTransform).toHaveBeenCalledWith({ event, error });
    });
  });
});
