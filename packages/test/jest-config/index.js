module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': require.resolve('./transformer'),
  },
};
