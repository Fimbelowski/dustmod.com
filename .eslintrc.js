module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
      },
    ],
  },
};
