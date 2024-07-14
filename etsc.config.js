// const esbuildPluginTsc = require("esbuild-plugin-tsc");

module.exports = {
  outDir: "./dist",
  esbuild: {
    minify: false,
    target: "es2018",
    // plugins: [esbuildPluginTsc()],
  },
  assets: {
    baseDir: "src",
    outDir: "./dist",
    filePatterns: ["**/*.json"],
  },
};
