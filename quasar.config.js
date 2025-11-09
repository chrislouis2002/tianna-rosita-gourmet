/* eslint-env node */

const { configure } = require("quasar/wrappers");
const path = require("path");

module.exports = configure(function (/* ctx */) {
  return {
    eslint: {
      warnings: true,
      errors: true,
    },

    css: ["app.scss"],

    extras: [
      "roboto-font",
      "material-icons",
      "fontawesome-v6",
    ],

    build: {
      target: {
        browser: ["es2019", "edge88", "firefox78", "chrome87", "safari13.1"],
        node: "node22", // matches Vercel runtime
      },

      vueRouterMode: "history", // clean URLs for SPA
      publicPath: "/",          // ensures assets load correctly on Vercel

      extendViteConf(viteConf) {
        viteConf.resolve = viteConf.resolve || {};
        viteConf.resolve.alias = {
          ...(viteConf.resolve.alias || {}),
          layouts: path.resolve(__dirname, "src/layouts"),
          pages: path.resolve(__dirname, "src/pages"),
          components: path.resolve(__dirname, "src/components"),
        };
      },
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {},
      plugins: [],
    },

    animations: "all",

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ["render"],
    },

    pwa: {
      workboxMode: "generateSW",
      injectPwaMetaTags: true,
      swFilename: "sw.js",
      manifestFilename: "manifest.json",
      useCredentialsForManifestTag: false,
    },

    cordova: {},
    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      inspectPort: 5858,
      bundler: "packager",
      packager: {},
      builder: {
        appId: "tianna",
      },
    },

    bex: {
      contentScripts: ["my-content-script"],
      boot: ["firebase", "google-analytics"],
    },
  };
});
