module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "@goldwasserexchange/eslint-config-base",
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
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": 0,
    "redux-saga/no-yield-in-race": 2,
    "redux-saga/yield-effects": 2
  },
};