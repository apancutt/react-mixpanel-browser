/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    es2024: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:typescript-sort-keys/recommended',
      ],
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            fixStyle: 'inline-type-imports',
          },
        ],
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/member-ordering': [
          'error',
          {
            default: {
              memberTypes: [
                'signature',
                'public-static-field',
                'protected-static-field',
                'private-static-field',
                'public-field',
                'protected-field',
                'private-field',
                'public-constructor',
                'protected-constructor',
                'private-constructor',
                'public-static-method',
                'protected-static-method',
                'private-static-method',
                ['public-get', 'public-set'],
                ['protected-get', 'protected-set'],
                ['private-get', 'private-set'],
                'public-method',
                'protected-method',
                'private-method',
              ],
              // TODO: Use "natural" once getter/setter collision issue is resolved
              // See: https://github.com/typescript-eslint/typescript-eslint/issues/6812
              order: 'alphabetically',
            },
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            ignoreRestSiblings: true,
          },
        ],
        'dot-notation': 'off',
        'no-unused-vars': 'off',
      },
      settings: {
        'import/resolver': {
          node: true,
          typescript: true,
        },
      },
    },
    {
      env: {
        browser: true,
        node: false,
      },
      files: ['src/**'],
      // TODO: Uncomment once https://github.com/amilajack/eslint-plugin-compat/pull/585 is merged
      // `query` should be "production" browserslist env
      // rules: {
      //   'compat/compat': [
      //     'error',
      //     {
      //       query,
      //       ignoreBrowserslistTargets: true,
      //     },
      //   ],
      // },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'sort-keys-shorthand'],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    'compat/compat': 'off',
    // TODO: Uncomment once https://github.com/amilajack/eslint-plugin-compat/pull/585 is merged
    // `query` should be "node" browserslist env
    // rules: {
    //   'compat/compat': [
    //     'error',
    //     {
    //       query,
    //       ignoreBrowserslistTargets: true,
    //     },
    //   ],
    // },
    'default-case': 'error',
    'dot-notation': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
    'import/namespace': [
      'error',
      {
        allowComputed: true,
      },
    ],
    'import/no-default-export': 'error',
    'import/no-duplicates': ['error', { 'prefer-inline': true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['!**/src/**'],
      },
    ],
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
    'no-constructor-return': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-unused-expressions': 'error',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys-shorthand/sort-keys-shorthand': [
      'error',
      'asc',
      {
        shorthand: 'first',
      },
    ],
  },
};
