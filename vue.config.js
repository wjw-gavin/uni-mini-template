const UnoCSS = require('unocss-webpack-uniapp2').default

module.exports = {
  configureWebpack: {
    plugins: [UnoCSS()]
  },
  transpileDependencies: ['uview-ui'],
  lintOnSave: 'error',
  devServer: {
    proxy: {
      '/api': {
        target: 'your http url',
        changeOrigin: true //是否跨域
      }
    },
    // 设置默认端口
    port: 4500,
    disableHostCheck: true
  }
}
