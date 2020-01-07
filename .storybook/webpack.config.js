/*
 * @Author: linjianxi
 * @Date: 2019-12-27 15:35:12
 * @LastEditTime : 2020-01-07 14:36:51
 * @Description: file content
 */
const path = require("path")
const webpack = require('webpack')

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
        exclude: /node_modules/,
      },
      { test: /\.tsx?$/, loaders: ['babel-loader', 'ts-loader'], include: path.resolve('components') },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              javascriptEnabled: true,
              minimize: true,
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
            options: { javascriptEnabled: true, sourceMap: false }
          }
        ],
      },
      {
        // for font
        test: /\.(ttf|otf|eot|woff(?:2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
      {
        // for svg
        test: /\.(svg?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ogg|mp3)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10 * 1000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx",".js", ".jsx", ".js", ".json"]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/),
  ]
}
