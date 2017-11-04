module.exports = {
  "parser": "babel-eslint",
  "extends": [
    'eslint-config-airbnb-base',
    "@goldwasserexchange/eslint-config-import",
    "@goldwasserexchange/eslint-config-style",
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
  "plugins": [
    "import",
  ],
};
