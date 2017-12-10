#!/usr/bin/env node

const path = require('path');
const spawn = require('cross-spawn');
const glob = require('globby');

const [executor, ignoredBin, script, ...args] = process.argv;

function getEnv() {
  // this is required to address an issue in cross-spawn
  // https://github.com/kentcdodds/kcd-scripts/issues/4
  return Object.keys(process.env)
    .filter(key => process.env[key] !== undefined)
    .reduce(
      (envCopy, key) => {
        envCopy[key] = process.env[key]
        return envCopy
      },
      {
        [`SCRIPTS_${script.toUpperCase()}`]: true,
      },
    )
}

if (script) {
  let scriptPath;
  try {
    scriptPath = require.resolve('@goldwasserexchange/' + script);
  } catch(err) {

  }
  if (scriptPath) {
    const result = spawn.sync(executor, [scriptPath, ...args], {
      stdio: 'inherit',
      env: getEnv(),
    })

    if (result.signal) {
      handleSignal(result)
    } else {
      process.exit(result.status)
    }
  } else {
    throw new Error(`Unknown script "${script}".`)
  }
}

function handleSignal(result) {
  if (result.signal === 'SIGKILL') {
    console.log(
      `The script "${script}" failed because the process exited too early. ` +
        'This probably means the system ran out of memory or someone called ' +
        '`kill -9` on the process.',
    )
  } else if (result.signal === 'SIGTERM') {
    console.log(
      `The script "${script}" failed because the process exited too early. ` +
        'Someone might have called `kill` or `killall`, or the system could ' +
        'be shutting down.',
    )
  }
  process.exit(1)
}