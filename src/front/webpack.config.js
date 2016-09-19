// webpack.config.js
var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./src/js/Main.jsx','./src/js/Comment.jsx','./src/js/Base.jsx'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    },
    {
      test: /\.js$/,
      loaders: ['babel-loader']
    },
    {
      test: /\.jsx$/,
      loader: 'babel-loader!jsx-loader?harmony'
    }]
  }
}