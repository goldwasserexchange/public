module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': require.resolve('./transformer'),
  },
  clearMocks: true,
};
