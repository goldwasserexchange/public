module.exports = {
  "parser": "babel-eslint",
  "extends": [
    require.resolve("eslint-config-airbnb"),
    "plugin:redux-saga/recommended",
    require.resolve("@goldwasserexchange/eslint-config-strict"),
    require.resolve("@goldwasserexchange/eslint-config-react"),
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