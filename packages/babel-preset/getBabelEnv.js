const getBabelEnv = () => {
  // This is similar to how `env` works in Babel:
  // https://babeljs.io/docs/usage/babelrc/#env-option
  // We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
  // https://github.com/babel/babel/issues/4539
  // https://github.com/facebookincubator/create-react-app/issues/720
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  return env;
};

module.exports = getBabelEnv;
