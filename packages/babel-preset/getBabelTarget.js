const getBabelTarget = (shouldThrow) => {
  const env = process.env.BABEL_TARGET;
  if (shouldThrow && !env) {
    throw new Error(`Using "@goldwasserexchange/babel-preset" requires that you specify "BABEL_TARGET" environment variable. Valid values are "es" and "commonjs" Instead, received: ${JSON.stringify(env)}.`);
  }
  return env;
};

module.exports = getBabelTarget;
