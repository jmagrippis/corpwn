const path = require('path')

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
  devServer: {
    contentBase: distRoot,
    open: true
  }
}
