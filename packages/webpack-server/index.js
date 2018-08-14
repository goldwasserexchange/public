const path = require('path');
const ip = require('ip');
const compression = require('compression');
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
const express = require('express');

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
  let server;
  if (process.env.NODE_ENV !== 'production') {
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
    server = new WebpackDevServer(compiler, serverConfig);
    server.listen(port, HOST, (err) => { // eslint-disable-line consistent-return
      if (err) {
        return console.log(err); // eslint-disable-line no-console
      }
      console.log(chalk.cyan('Starting the development server...\n')); // eslint-disable-line no-console
      openBrowser(urls.localUrlForBrowser);
    });
  } else {
    const app = express();
    app.use(compression());
    app.use(webpackConfig.output.publicPath, express.static(webpackConfig.output.path));
    app.get('*', (req, res) => res.sendFile(path.resolve(webpackConfig.output.path, 'index.html')));
    server = app.listen(port, (err) => {
      if (err) {
        console.log(chalk.red(err)); // eslint-disable-line no-console
      } else {
        openBrowser(urls.localUrlForBrowser);
        console.log(`Server started ${chalk.green('✓')}`); // eslint-disable-line no-console
        console.log(chalk.bold('Access URLs:')); // eslint-disable-line no-console
        console.log(`Localhost: ${chalk.magenta(urls.localUrlForTerminal)}`); // eslint-disable-line no-console
        console.log(`LAN: ${chalk.magenta(urls.lanUrlForTerminal)}`); // eslint-disable-line no-console
        console.log(chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)); // eslint-disable-line no-console
      }
    });
  }
  ['SIGINT', 'SIGTERM'].forEach((sig) => {
    process.on(sig, () => {
      if (server) {
        server.close();
      }
      process.exit();
    });
  });
}).catch((err) => {
  if (err && err.message) {
    console.log(chalk.red(err.message)); // eslint-disable-line no-console
  }
  process.exit(1); // eslint-disable-line unicorn/no-process-exit
});
