const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // VuetifyをIE11に対応させる
  transpileDependencies: ['vuetify'],
  // Githubでサイトアップする場合、アドレスにリポジトリ名を含める
  publicPath: isProd ? '/gas_household' : '/',
  // ルート直下の'/docs'にサイトデータを書き出す。Githubはrootか/docsのどちらかをアップできる
  outputDir: 'docs',
  // ファイル名にハッシュを付けずに出力する
  filenameHashing: false,
  // ソースマップを出力しない
  // ソースマップは、コンパイル前と後のデータを保持し、
  // デバッグ時にコンパイル前のコードでエラー箇所を教えてくれる
  productionSourceMap: false,
}
