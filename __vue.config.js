const env = process.env.NODE_ENV || 'development'
const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: env === 'development'? 'development' : 'production',
  entry: {
    main: ['./src/js/main.js', './src/css/main.scss']
  },
  devServer: {
    contentBase: './www',
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer'),
              ]
            }
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        }))
      }
    ]
  }
}
