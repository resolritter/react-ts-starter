const path = require("path")
const lodash = require("lodash")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const baseConfiguration = require("./base.webpack.config")
const { mergeConfigurations } = require("./utils")

module.exports = mergeConfigurations(baseConfiguration, {
  mode: "production",
  output: {
    path: path.resolve(baseConfiguration.context, "./public"),
    filename: "[name]-[contenthash].js",
    chunkFilename: "[name]-[contenthash].js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(baseConfiguration.context, "./index.html"),
      filename: "index.html",
    }),
    new CopyWebpackPlugin([
      { context: baseConfiguration.context, from: "assets" },
    ]),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 30000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: function({ rawRequest, _buildHash }) {
            return `npm.${rawRequest}__${_buildHash}.js`
          },
        },
      },
    },
  },
})
