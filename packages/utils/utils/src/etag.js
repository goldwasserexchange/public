import crypto from 'crypto';

const etag = (entity) => {
  if (entity.length === 0) return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';

  const hash = crypto
    .createHash('sha1')
    .update(entity, 'utf8')
    .digest('base64')
    .substring(0, 27);

  const len = Buffer.byteLength(entity, 'utf8');

  return `"${len.toString(16)}-${hash}"`;
};

export default etag;
