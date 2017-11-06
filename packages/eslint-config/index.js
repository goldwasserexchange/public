const { ifAnyDep } = require('@goldwasserexchange/read-pkg-up-helpers');

module.exports = {
  "parser": "babel-eslint",
  "extends": [
    require.resolve("@goldwasserexchange/eslint-config-strict"),
    ifAnyDep('redux-saga', "plugin:redux-saga/recommended"),
    ifAnyDep('react', require.resolve("@goldwasserexchange/eslint-config-react")),
    ifAnyDep('react', require.resolve("eslint-config-airbnb/rules/react-a11y"))
  ].filter(Boolean),
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "import",
    ifAnyDep('redux-saga', "redux-saga"),
    ifAnyDep('react', "react"),
    ifAnyDep('react', "jsx-a11y")
  ].filter(Boolean),
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": ifAnyDep('react', true, false),
    }
  }
};