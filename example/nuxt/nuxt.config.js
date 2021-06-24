import WindiCSS from '../../dist'

module.exports = {
  css: [
    '@/assets/css/test.css',
    '@/assets/css/main.scss',
    '@/assets/styles/windi.css',
  ],
  plugins: [
    '@/plugins/windicss.js',
  ],
  components: true,
  build: {
    postcss: false,
    plugins: [
      new WindiCSS,
    ],
  },
}
