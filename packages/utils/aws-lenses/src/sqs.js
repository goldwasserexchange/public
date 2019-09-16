import {
  lensProp, compose, lens, path, assoc, toString, identity,
} from 'ramda';
import { json } from './common';

export const messageId = lensProp('messageId');

export const body = lensProp('body');
export const bodyJson = compose(body, json);

export const messageAttributes = lensProp('messageAttributes');

const messageAttribute = (type, valueKey, transform) => (name) => compose( // eslint-disable-line ramda/compose-pipe-style
  messageAttributes,
  lens(
    path([name, valueKey]),
    (v, obj) => assoc(
      name,
      { dataType: type, [valueKey]: transform(v) },
      obj
    )
  )
);

export const messageAttributeString = messageAttribute('String', 'stringValue', toString);

export const messageAttributeNumber = messageAttribute('Number', 'stringValue', toString);

export const messageAttributeBinary = messageAttribute('Binary', 'binaryValue', identity);
