import R from 'ramda';
import awsEvent from './awsEvent';
import safeParse from './safeParse';

export const event = awsEvent('Sns');

export const subject = R.compose(R.prop('Subject'), event);
export const rawMessage = R.compose(R.prop('Message'), event);
export const message = R.compose(safeParse, rawMessage);
