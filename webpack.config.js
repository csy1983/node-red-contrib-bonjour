const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['babel-polyfill', './src/bonjour.js'],
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /bonjour\.html/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
      {
        test: /bonjour\.json/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  output: {
    path: './dist',
    filename: 'bonjour.js',
    libraryTarget: 'umd',
  },
  externals: [nodeExternals()],
};
