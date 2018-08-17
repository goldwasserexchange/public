import log from './log';

const logEvent = event => log('Event', event);
const logResult = result => log('Result', result);
const logError = error => log('Error', error);

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
