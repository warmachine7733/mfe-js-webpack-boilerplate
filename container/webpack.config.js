const htmlWebpackPlugin = require("html-webpack-plugin");
const moduleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 7070,
  },
  plugins: [
    new moduleFederationPlugin({
      name: "container",
      remotes: {
        products: "products@http://localhost:7071/remoteEntry.js",
        cart: "cart@http://localhost:7072/remoteEntry.js"
      },
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
