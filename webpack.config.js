const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/app.js"
  },
  output: {
    path: path.resolve(__dirname, "/dist/"),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /(?!\.html)\.jade$/, loader: "jade-loader?context=./src" },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "autoprefixer-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file?hash=sha512&digest=hex&name=[hash].[ext]",
          "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html.jade"
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
      // filename: '[name].css',
      // chunkFilename: '[id].css',
      // ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
  ],
  devServer: {
    contentBase: "./dist/",
    host: "0.0.0.0",
    historyApiFallback: true
  }
};
