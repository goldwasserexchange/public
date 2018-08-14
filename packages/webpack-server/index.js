const chalk = require('chalk');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const { pkg } = require('@goldwasserexchange/read-pkg-up-helpers');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('@goldwasserexchange/webpack-config');
const {
  choosePort,
  createCompiler,
  prepareUrls,
} = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');
const argv = require('minimist')(process.argv.slice(2));

// Tools like Cloud9 rely on this.
const DEFAULT_PORT = parseInt(argv.port || process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
  console.log(chalk.cyan(`Attempting to bind to HOST environment variable: ${chalk.yellow(chalk.bold(process.env.HOST))}`)); // eslint-disable-line no-console
  console.log('If this was unintentional, check that you haven\'t mistakenly set it in your shell.'); // eslint-disable-line no-console
  console.log(`Learn more here: ${chalk.yellow('http://bit.ly/CRA-advanced-config')}`); // eslint-disable-line no-console
  console.log('-----------------------------------------------------------------------------------'); // eslint-disable-line no-console
}

choosePort(HOST, DEFAULT_PORT).then((port) => {
  if (port == null) {
    console.log(chalk.red('No valid port was set')); // eslint-disable-line no-console
  }
  const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
  const appName = pkg.name;
  const urls = prepareUrls(protocol, HOST, port);
  const compiler = createCompiler(
    webpack,
    webpackConfig,
    appName,
    urls,
    false,
  );
  const serverConfig = {
    disableHostCheck: process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    quiet: true,
    https: protocol === 'https',
    host: HOST,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    public: urls.lanUrlForConfig,
    before(app) {
      app.use(errorOverlayMiddleware());
      app.use(noopServiceWorkerMiddleware());
    },
  };
  const devServer = new WebpackDevServer(compiler, serverConfig);
  devServer.listen(port, HOST, (err) => { // eslint-disable-line consistent-return
    if (err) {
      return console.log(err); // eslint-disable-line no-console
    }
    console.log(chalk.cyan('Starting the development server...\n')); // eslint-disable-line no-console
    openBrowser(urls.localUrlForBrowser);
  });
  ['SIGINT', 'SIGTERM'].forEach((sig) => {
    process.on(sig, () => {
      devServer.close();
      process.exit();
    });
  });
}).catch((err) => {
  if (err && err.message) {
    console.log(chalk.red(err.message)); // eslint-disable-line no-console
  }
  process.exit(1); // eslint-disable-line unicorn/no-process-exit
});
