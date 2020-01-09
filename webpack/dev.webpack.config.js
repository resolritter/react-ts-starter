const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const baseConfiguration = require("./base.webpack.config")
const { mergeConfigurations } = require("./utils")

module.exports = mergeConfigurations(baseConfiguration, {
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: "3000",
    clientLogLevel: "none",
    open: true,
    stats: "errors-only",
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(baseConfig.context, "assets"),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({ eslint: true }),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: "TypeScript",
      excludeWarnings: false,
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})
