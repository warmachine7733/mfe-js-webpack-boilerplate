const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 7071,
  },
  plugins: [
    new moduleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/bootstrap",
      },
      shared: ["faker"],
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
