module.exports = {
  semi: true,
  useTabs: false,
  arrowParens: 'always',
  trailingComma: 'all',
  bracketSpacing: true,
  quoteProps: 'as-needed',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 80,
  rangeStart: 0,
  rangeEnd: Infinity,
  jsxBracketSameLine: false,
  jsxSingleQuote: true,
  plugins: [
    '@svgr/plugin-prettier',
    'prettier-plugin-organize-imports',
    'prettier-plugin-css-order',
  ],
};
