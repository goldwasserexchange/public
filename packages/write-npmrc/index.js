#!/usr/bin/env node

const { writeFileSync } = require('fs');
const { parse } = require('url');

if (process.env.NPM_TOKEN) {
  const registryUrl = process.env.NPM_REGISTRY_URL || 'https://registry.npmjs.org';
  const { host } = parse(registryUrl);

  const npmrc = `//${host}/:_authToken=\${NPM_TOKEN}\nregistry=${registryUrl}`;

  writeFileSync('./.npmrc', npmrc);
}
