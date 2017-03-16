const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['babel-polyfill', './src/bonjour-browser.js'],
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
        test: /bonjour-browser\.html/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
        },
      },
      {
        test: /bonjour-browser\.json/,
        loader: 'file-loader',
        query: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  output: {
    path: './dist',
    filename: 'bonjour-browser.js',
    libraryTarget: 'umd',
  },
  externals: [nodeExternals()],
};
