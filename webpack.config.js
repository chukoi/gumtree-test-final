// config
const path = require('path');
const dist = path.join(__dirname, 'dist');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// webpack
module.exports = [
  {
    name: 'client',
    target: 'web',
    entry: ['./src/client.jsx', './sass/main.scss', 'react-hot-loader/patch'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'client.js',
      publicPath: '/dist/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      loaders: [],
      rules: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.jsx?$/,         // Match both .js and .jsx files
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
            {
              presets: ['react']
            }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: false,
                minimize: true,
                importLoaders: 1,
                localIdentName: '[hash:base64:10]',
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'server',
    target: 'node',
    entry: ['./src/server.jsx'],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      publicPath: '/dist/'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=8192'
        },
        {
          test: /\.jsx?$/,         // Match both .js and .jsx files
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
            {
              presets: ['react']
            }
        }
      ]
    }
  }
];