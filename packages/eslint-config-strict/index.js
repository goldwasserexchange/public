module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "@goldwasserexchange/eslint-config-base",
    "airbnb-base/rules/strict",
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
  }
};
