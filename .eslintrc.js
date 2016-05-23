module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react"
    ],
      "rules": {
      "indent": 1,
      "func-names": 1,
      "max-len": [2, 120, 2],
      "no-unused-vars": 1,
      "new-cap": [2, {"newIsCapExceptions": ["fromJS"]}],
      "react/jsx-no-bind": 0,
      "react/prefer-es6-class": 0,
    }
};
