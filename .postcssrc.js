// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  },
  plugins: {
    'postcss-px2rem': {
      remUnit: 75 // 设计稿宽度/10，即750/10
    }
  }
}
