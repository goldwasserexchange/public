import lensProp from "ramda/es/lensProp";
import compose from "ramda/es/compose";
import lens from "ramda/es/lens";
import path from "ramda/es/path";
import assoc from "ramda/es/assoc";
import toString from "ramda/es/toString";
import identity from "ramda/es/identity";
import { json } from './common';
export const messageId = lensProp('messageId');
export const body = lensProp('body');
export const bodyJson = compose(body, json);
export const messageAttributes = lensProp('messageAttributes');

const messageAttribute = (type, valueKey, transform) => name => compose(messageAttributes, lens(path([name, valueKey]), (v, obj) => assoc(name, {
  dataType: type,
  [valueKey]: transform(v)
}, obj)));

export const messageAttributeString = messageAttribute('String', 'stringValue', toString);
export const messageAttributeNumber = messageAttribute('Number', 'stringValue', toString);
export const messageAttributeBinary = messageAttribute('Binary', 'binaryValue', identity);