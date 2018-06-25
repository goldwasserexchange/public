import log from './log';

const logEvent = log('Event');
const logResult = log('Result');
const logError = log('Error');

const logAndSucceed = (data, callback) => {
  logResult(data);
  callback(null, data);
};

const logAndFail = (err, callback) => {
  logError(err);
  callback(err);
};

const lambdaHandler = promiseChain => (event, context, callback) => {
  logEvent(event);

  promiseChain(event)
    .then(data => logAndSucceed(data, callback))
    .catch(err => logAndFail(err, callback));
};

export default lambdaHandler;
