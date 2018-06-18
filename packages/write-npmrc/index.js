#!/usr/bin/env node

const { writeFileSync } = require('fs');
const { parse } = require('url');

if (process.env.NPM_TOKEN) {
  const { host: registryUrl } = parse(process.env.NPM_REGISTRY_URL || 'https://registry.npmjs.org');

  const npmrc = `//${registryUrl}/:_authToken=\${NPM_TOKEN}`;

  writeFileSync('./.npmrc', npmrc);
}
