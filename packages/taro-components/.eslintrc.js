const config = require('../../.eslintrc.js')

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'no-console': 0,
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': 'Nerv' }],
  },
  settings: {
    react: {
      pragma: 'Nerv'
    }
  }
}
