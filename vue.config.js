module.exports = {
  outputDir: 'dist/deploy/public',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/main.scss";'
      }
    }
  }
};
