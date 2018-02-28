module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "mocha": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "indent": [
          "error",
          2
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ]
  }
};