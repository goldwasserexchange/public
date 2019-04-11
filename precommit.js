const { join, dirname } = require('path');
const { promisify } = require('util');
const { exec, spawn } = require('child_process');

const execAsync = promisify(exec);

const precommit = async () => {
  const lernaLs = execAsync('npx lerna ls --json --all');
  const gitDiff = execAsync('git diff --cached --name-only');

  const [{ stdout: ls }, { stdout: diff }] = await Promise.all([lernaLs, gitDiff]);

  const packages = JSON.parse(ls.trim());
  const staged = diff.trim().split('\n');

  const scopes = packages
    .filter(p => staged.reduce((acc, f) => acc || dirname(join(process.cwd(), f)).includes(p.location), false))
    .map(({ name }) => ['--scope', name]);

  if (scopes.length > 0) spawn('npx', ['lerna', 'run', '--concurrency', '1', '--stream', 'precommit', ...[].concat(...scopes)], { stdio: 'inherit' });
};

precommit();
