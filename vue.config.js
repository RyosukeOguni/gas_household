const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: isProd ? '/gas_household' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
}
