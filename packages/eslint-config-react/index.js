module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb/rules/react",
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
    "react/jsx-filename-extension": 0,
  },
};