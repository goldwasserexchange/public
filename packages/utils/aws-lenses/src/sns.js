import { compose, lensProp } from 'ramda';
import { headRecord, json } from './common';

export const sns = compose(headRecord, lensProp('Sns'));

export const messageId = compose(sns, lensProp('MessageId'));

export const message = compose(sns, lensProp('Message'));
export const messageJson = compose(message, json);

export const messageAttributes = compose(sns, lensProp('MessageAttributes'));

export const topicArn = compose(sns, lensProp('TopicArn'));

export const subject = compose(sns, lensProp('Subject'));
