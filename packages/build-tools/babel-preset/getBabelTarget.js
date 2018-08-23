const getBabelTarget = () => {
  const env = process.env.BABEL_TARGET || 'node';
  return env;
};

module.exports = getBabelTarget;
