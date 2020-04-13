const path = require("path")
const context = path.resolve(__dirname, "..")

module.exports = {
  context,
  entry: {
    app: ["core-js", path.resolve(context, "./src/index.tsx")],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"],
    alias: {
      src: path.resolve(context, "src"),
    },
  },
}
