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

test('event', () => expect(event(awsEvent)).toEqual(sns));

test('subject', () => expect(subject(awsEvent)).toBe(sns.Subject));

test('rawMessage', () => expect(rawMessage(awsEvent)).toBe(sns.Message));

test('message', () => expect(message(awsEvent)).toEqual(JSON.parse(sns.Message)));
