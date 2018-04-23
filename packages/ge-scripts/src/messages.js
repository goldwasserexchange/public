module.exports = {
  SIGKILL: script => `The script "${script}" failed because the process exited too early. This probably means the system ran out of memory or someone called 'kill -9' on the process.`,
  SIGTERM: script => `The script "${script}" failed because the process exited too early. Someone might have called 'kill' or 'killall', or the system could be shutting down.`,
};
