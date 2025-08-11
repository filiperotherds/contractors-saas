/** @type {import('eslint').Linter} */
module.exports = {
  extends: ['eslint'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}