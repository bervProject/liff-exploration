module.exports = {
  plugins: ['cypress'],

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
    'plugin:cypress/recommended',
  ],

  rules: {
    'vue/multi-word-component-names': 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'class-methods-use-this': 'warn',
    'vuejs-accessibility/click-events-have-key-events': 'warn',
    'vuejs-accessibility/alt-text': 'warn',
    'max-len': 'warn',
    'implicit-arrow-linebreak': 'warn',
    'no-dupe-keys': 'warn',
  },

  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
  },

  env: {
    node: true,
    jest: true,
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  root: true,

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
    'plugin:cypress/recommended',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
};
