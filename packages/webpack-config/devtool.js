module.exports = process.env.NODE_ENV === 'test' // eslint-disable-line no-nested-ternary
  ? 'inline-source-map'
  : process.env.NODE_ENV === 'development'
    ? 'cheap-module-source-map'
    : false;

