const webpack = require('webpack');
const path    = require('path');
const dotenv  = require('dotenv');
const env     = dotenv.config({ path: path.join(__dirname, '.env') }).parsed;

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles2.css`//,
    }),
    //new webpack.DefinePlugin(envKeys)
    new webpack.DefinePlugin({
      MAPBOX_API_KEY: JSON.stringify(env.MAPBOX_API_KEY)
    })

  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};