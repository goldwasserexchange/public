module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:redux-saga/recommended",
    "@goldwasserexchange/eslint-config-base",
    "@goldwasserexchange/eslint-config-react",
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "import",
    "redux-saga",
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
  },
};