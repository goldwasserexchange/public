const fetch = require('isomorphic-fetch');
const fs = require('fs');
const path = require('path');

const getVersions = () => fetch('http://nodejs.org/dist/index.json')
  .then((response) => response.json())
  .then((body) => body.map(({ version }) => version))
  .then((versions) => JSON.stringify(versions, null, 2))
  .then((versions) => new Promise((res, rej) => fs.writeFile(path.join(__dirname, '../versions.json'), versions, (err) => (err ? rej(err) : res(versions)))));

getVersions();
