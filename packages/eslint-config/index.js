module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
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
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "class-methods-use-this": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-console": 1,
    "no-use-before-define": 0,
    "require-yield": 0,
    "import/extensions": 0,
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 0,
    "import/prefer-default-export": 0,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "redux-saga/no-yield-in-race": 2,
    "redux-saga/yield-effects": 2
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./internals/webpack/webpack.dev.babel.js"
      }
    }
  }
};