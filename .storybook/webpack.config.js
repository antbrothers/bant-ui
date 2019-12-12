/*
 * @Author: linjianxi
 * @Date: 2019-12-12 16:43:46
 * @LastEditTime: 2019-12-12 16:43:53
 * @Description: file content
 */
const path = require("path");

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: ['awesome-typescript-loader', 'react-docgen-typescript-loader'],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};