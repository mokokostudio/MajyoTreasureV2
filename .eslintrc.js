// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: false,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 1,
    // allow async-await
    'generator-star-spacing': 1,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-undef': 1,
    'indent': 1, 
    'camelcase': 1,
    'space-before-function-paren':1
  }
}



