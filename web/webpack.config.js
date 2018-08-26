const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const distRoot = path.resolve(__dirname, 'dist')

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: distRoot
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new Dotenv(),
    new HtmlWebpackPlugin({ title: 'Corpwn: Hack your colleagues!' })
  ],
  devServer: {
    contentBase: distRoot,
    open: true
  }
}
