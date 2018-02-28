const getBabelTarget = () => {
  const env = process.env.BABEL_ES_TARGET || 'commonjs';
  return env;
};

module.exports = getBabelTarget;
