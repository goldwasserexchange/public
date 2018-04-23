#!/usr/bin/env node
"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const spawn = require('cross-spawn');

const messages = require('./messages');

const [executor,
/* eslint-disable no-unused-vars */
ignoredBin
/* eslint-enable */
, script, ...args] = process.argv;

function handleSignal(result) {
  console.log(messages[result.signal](script)); // eslint-disable-line no-console

  process.exit(1);
}

function getEnv() {
  // this is required to address an issue in cross-spawn
  // https://github.com/kentcdodds/kcd-scripts/issues/4
  return Object.keys(process.env).filter(key => process.env[key] !== undefined).reduce((envCopy, key) => _objectSpread({}, envCopy, {
    [key]: process.env[key]
  }), {
    [`SCRIPTS_${script.toUpperCase()}`]: true
  });
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
      env: getEnv()
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