module.exports = {
  entry: "./src/entry.js",
  output: {
    path: "./dist/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
    ]
  }
};
