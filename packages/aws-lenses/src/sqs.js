import { lensProp, compose, lens, path, assoc, toString, identity } from 'ramda';

export const body = lensProp('body');

export const messageAttributes = lensProp('messageAttributes');

const messageAttribute = (type, valueKey, transform) => name => compose(
  messageAttributes,
  lens(
    path([name, valueKey]),
    (v, obj) => assoc(
      name,
      { DataType: type, [valueKey]: transform(v) },
      obj
    )
  )
);

export const messageAttributeString = messageAttribute('String', 'StringValue', toString);

export const messageAttributeNumber = messageAttribute('Number', 'StringValue', toString);

export const messageAttributeBinary = messageAttribute('Binary', 'BinaryValue', identity);
