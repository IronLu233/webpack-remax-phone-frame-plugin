const WebpackRemaxPhoneFramePlugin = require("../dist/index");

module.exports = {
  one: true,
  output: "dist/" + process.env.REMAX_PLATFORM,

  configWebpack({ config }) {
    // config
    //   .plugin("webpack-remax-phone-frame-plugin")
    //   .use(WebpackRemaxPhoneFramePlugin, [{ entryName: "entry.html" }]);

    config.when(
      () => process.env.NODE_ENV !== "production",
      () =>
        config
          .plugin("webpack-remax-phone-frame-plugin")
          .use(WebpackRemaxPhoneFramePlugin, [
            { entryName: "entry.html", url: "https://btv233.233" },
          ])
    );
  },
};
