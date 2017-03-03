import test from 'ava';
import { event, subject, rawMessage, message } from '../src/snsEvent';

const sns = {
  Subject: 'hello',
  Message: '{"key":"value"}',
};
const awsEvent = {
  Records: [
    { Sns: sns },
  ],
};

test('event', t => t.deepEqual(event(awsEvent), sns));

test('subject', t => t.is(subject(awsEvent), sns.Subject));

test('rawMessage', t => t.is(rawMessage(awsEvent), sns.Message));

test('message', t => t.deepEqual(message(awsEvent), JSON.parse(sns.Message)));
