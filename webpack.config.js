const path = require('path');
const SRC_DIR = path.join(__dirname, 'client/src');
const DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: [`${SRC_DIR}/index.js`,
    'react-hot-loader/patch', // RHL patch
    './scripts/index'], // Your appʼs entry point
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    // loaders: [{
    //   test: /\.js$/,
    //   loaders: ['react-hot-loader/webpack'],
    // }],
    rules: [
      {
        test: /\.jsx|\.js/,
        exclude: /node_modules/,
        use: {
          loader: ['react-hot-loader/webpack','babel-loader'],
          options: {
            presets: ['@babel/react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  }
}