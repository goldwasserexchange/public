
const { map } = require('ramda');

module.exports = map(regexString => new RegExp(regexString));
