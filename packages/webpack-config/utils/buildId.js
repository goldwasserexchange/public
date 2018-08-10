const buildId = process.env.NODE_ENV === 'production'
  ? `${process.env.BITBUCKET_COMMIT || process.env.BITBUCKET_TAG || Date.now()}/`
  : '';

module.exports = buildId;
