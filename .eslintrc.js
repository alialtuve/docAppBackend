module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "consistent-return": 0,
    "no-console": 1,
    "camelcase": 0,
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "linebreak-style": ["error", "windows"],
    "indent": ["error", 2],
    "no-unused-vars": [
      "error",
      { "varsIgnorePattern": "should\|expect" }
    ]
  },
};
