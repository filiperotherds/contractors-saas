/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['eslint'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}