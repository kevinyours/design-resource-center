module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'prettier.config.cjs',
    '.prettierrc.cjs',
    'node_modules/',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-refresh', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
};
