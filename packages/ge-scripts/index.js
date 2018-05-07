#!/usr/bin/env node

const spawn = require('cross-spawn');
const messages = require('./messages');
const { set, lensProp, view } = require('ramda');

const [executor, /* eslint-disable no-unused-vars */ ignoredBin /* eslint-enable */, script, ...args] = process.argv;

function handleSignal(result) {
  console.log(messages[result.signal](script)); // eslint-disable-line no-console
  process.exit(1);
}

function getEnv() {
  // this is required to address an issue in cross-spawn
  // https://github.com/kentcdodds/kcd-scripts/issues/4
  return Object.keys(process.env)
    .filter(key => process.env[key] !== undefined)
    .reduce(
      (envCopy, key) => {
        const keyLens = lensProp(key);
        return set(keyLens, view(keyLens, process.env), envCopy);
      },
      {
        [`SCRIPTS_${script.toUpperCase()}`]: true,
      },
    );
}

if (script) {
  let scriptPath;
  try {
    scriptPath = require.resolve(`@goldwasserexchange/${script}`);
  } catch (err) {
    console.log('error', err); // eslint-disable-line no-console
  }
  if (scriptPath) {
    const result = spawn.sync(executor, [scriptPath, ...args], {
      stdio: 'inherit',
      env: getEnv(),
    });

    if (result.signal) {
      handleSignal(result);
    } else {
      process.exit(result.status);
    }
  } else {
    throw new Error(`Unknown script "${script}".`);
  }
}
