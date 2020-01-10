const path = require("path")
const lodash = require("lodash")

// for hashing the chunk names
var crypto = require('crypto')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const baseConfiguration = require("./base.webpack.config")
const { mergeConfigurations, hashChunk } = require("./utils")

var configuration = mergeConfigurations(baseConfiguration, {
  mode: "production",
  output: {
    path: path.resolve(baseConfiguration.context, "./public"),
    filename: "[name]-[contenthash].js",
    chunkFilename: "[name]-[contenthash].js",
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
      minSize: 2048,
      cacheGroups: {
        fromNpm: {
          test: /[\\/]node_modules[\\/]/,
          name: function({ rawRequest }) {
            return `npm.${hashChunk(path.basename(rawRequest))}`
          },
        },
      },
    },
  },
})

if (process.env["SOURCEMAPS"]) {
  configuration = mergeConfigurations(configuration, {
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
  })
}

module.exports = configuration
