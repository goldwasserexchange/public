import { compose, lensProp } from 'ramda';

export const username = lensProp('userName');

export const triggerSource = lensProp('triggerSource');

export const request = lensProp('request');
export const userAttributes = compose(request, lensProp('userAttributes'));
export const birthdate = compose(userAttributes, lensProp('birthdate'));
export const phoneNumber = compose(userAttributes, lensProp('phone_number'));
export const locale = compose(userAttributes, lensProp('locale'));

export const codeParameter = compose(request, lensProp('codeParameter'));

export const validationData = compose(request, lensProp('validationData'));

export const response = lensProp('response');
export const smsMessage = compose(response, lensProp('smsMessage'));
export const claimsOverrideDetails = compose(response, lensProp('claimsOverrideDetails'));
export const claimsToAddOrOverride = compose(claimsOverrideDetails, lensProp('claimsToAddOrOverride'));
