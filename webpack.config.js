const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const ExtractCss = new ExtractTextPlugin('style.css');

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

module.exports = {
  entry: {
    js: path.resolve(__dirname, 'src', 'index.js')
  },
  mode: mode,
  output: {
    path: path.resolve(__dirname, 'public', 'assets'),
    filename: 'bundle.js',
    sourceMapFilename: '[file].map',
    publicPath: "/public/assets/"
  },
  devServer: {
    port: 3003,
    hot: true,
    inline: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    }
  },
  module: {
    rules: [
      {
        test: /(\.scss)|(\.css)$/,

        use: ExtractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    ExtractCss,
    new webpack.HotModuleReplacementPlugin()
  ]
};