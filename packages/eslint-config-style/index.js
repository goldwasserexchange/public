module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base/rules/style",
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
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "max-len": 0,
  },
};
