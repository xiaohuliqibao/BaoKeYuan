module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "zh",
      fallbackLocale: "zh",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/voice": {
        target: "http://47.102.112.85:9090",
        changeOrigin: true,
      },
    },
  },
};
