'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('###################');
console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  mode: "development",
  devtool: 'source-map',
  entry: [
    // require.resolve("@babel/polyfill"),
    path.resolve(__dirname, 'src/index.tsx'),
  ],
  output: {
    filename: 'index.js',
    chunkFilename: '[name].chunk.js',
    //libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 8088,
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
      '.jsx',
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.DefinePlugin(true),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};