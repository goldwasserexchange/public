import snsEvent from '../src/snsEvent';
import snsEventSubject from '../src/snsEventSubject';
import snsEventRawMessage from '../src/snsEventRawMessage';
import snsEventMessage from '../src/snsEventMessage';

const sns = {
  Subject: 'hello',
  Message: '{"key":"value"}',
};
const awsEvent = {
  Records: [
    { Sns: sns },
  ],
};

test('snsEvent', () => expect(snsEvent(awsEvent)).toEqual(sns));
test('snsEventSubject', () => expect(snsEventSubject(awsEvent)).toBe(sns.Subject));
test('snsEventRawMessage', () => expect(snsEventRawMessage(awsEvent)).toBe(sns.Message));
test('snsEventMessage', () => expect(snsEventMessage(awsEvent)).toEqual(JSON.parse(sns.Message)));
