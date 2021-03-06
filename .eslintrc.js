module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0
  }
}
