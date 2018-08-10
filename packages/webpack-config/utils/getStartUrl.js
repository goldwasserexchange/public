module.exports = function getStartUrl() {
  let startUrl = 'http://localhost:3000';
  if (process.env.BITBUCKET_BRANCH && process.env.BITBUCKET_BRANCH === 'master') {
    startUrl = 'https://dev.goldwasseronline.be';
  }
  if (process.env.BITBUCKET_TAG && process.env.BITBUCKET_TAG[0] === 'v') {
    startUrl = 'https://www.goldwasseronline.be';
  }
  return startUrl;
};
