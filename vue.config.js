const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: isProd ? '/リポジトリ名' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
}
