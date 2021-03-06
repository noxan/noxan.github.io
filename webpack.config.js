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
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [require("autoprefixer")]
            }
          },
          "stylus-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              query: {
                bypassOnDebug: true,
                mozjpeg: {
                  progressive: true
                },
                gifsicle: {
                  optimizationLevel: 7,
                  interlaced: false
                },
                optipng: {
                  optimizationLevel: 7,
                  interlaced: false
                }
              }
            }
          }
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
