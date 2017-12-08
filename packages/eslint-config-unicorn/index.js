module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "unicorn",
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "unicorn/catch-error-name": ["error", {"name": "err"}],
    "unicorn/explicit-length-check": "error",
    "unicorn/filename-case": "off",
    "unicorn/no-abusive-eslint-disable": "error",
    "unicorn/no-process-exit": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/number-literal-case": "error",
    "unicorn/escape-case": "error",
    "unicorn/no-array-instanceof": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/custom-error-definition": "error",
    "unicorn/prefer-starts-ends-with": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/no-fn-reference-in-iterator": "error",
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/regex-shorthand": "error"
  }
};
