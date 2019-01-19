module.exports = function (api) {
  api.chainWebpack(config => {
    config.module.rules.delete('svg')

    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  })
}