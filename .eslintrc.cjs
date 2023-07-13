/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    es2023: true,
    'shared-node-browser': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['bin/**', '.eslintrc.cjs'],
    },
    {
      env: {
        browser: true,
      },
      extends: ['plugin:compat/recommended'],
      files: ['src/*'],
    },
    {
      extends: ['plugin:@typescript-eslint/strict', 'plugin:import/typescript'],
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            fixStyle: 'inline-type-imports',
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: true,
        },
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  root: true,
  rules: {
    'default-case': 'error',
    'dot-notation': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'import/no-default-export': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-unused-expressions': 'error',
  },
  settings: {
    'import/resolver': {
      node: true,
    },
  },
};
