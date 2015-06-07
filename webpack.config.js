module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false' ] }
    ]
  },
  devServer: {
    contentBase: "./dist/",
    host: "0.0.0.0"
  }
};
