const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: "./src/app.js",
  },
  output: {
    path: "./dist/",
    filename: "[name].[hash].js"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /(?!\.html)\.jade$/, loader: "jade-loader" },
      { test: /index\.html\.jade$/, loader: "file-loader?name=[path][name]&context=./src!jade-html-loader" },
      { test: /\.styl$/, loader: "style-loader!css-loader!autoprefixer-loader!stylus-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' ] }
    ],
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "jscs-loader"
    },  {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "jshint-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html.jade'
    }),
  ],
  devServer: {
    contentBase: "./dist/",
    host: "0.0.0.0",
    historyApiFallback: true
  }
};
