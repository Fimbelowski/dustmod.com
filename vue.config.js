module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/_typo.scss";',
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
