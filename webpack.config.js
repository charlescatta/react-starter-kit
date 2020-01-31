const path = require('path');
const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = {
  entry: {
    main: './src/index.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, 'assets/fonts'),
      '@img': path.resolve(__dirname, 'assets/img'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages')
    },
    extensions: ['.jsx', '.js', '.wasm', '.mjs', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          env: {
            production: {
              plugins: ["emotion"]
            },
            development: {
              plugins: [['emotion', { sourceMap: true }]]
            }
          }
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          // Images larger than 10 KB won’t be inlined
          limit: 10 * 1024
        }
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ImageminPlugin({
      cacheFolder: '.cache',
      onlyUseIfSmaller: true,
      jpegtran: null,
      plugins: [
        ImageminMozjpeg({
          quality: 87,
          progressive: true
        })
      ]
    })
  ],
  devServer: {
    hot: true,
    contentBase: './build',
  }
};