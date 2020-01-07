/*
 * @Author: linjianxi
 * @Date: 2019-12-27 17:33:13
 * @LastEditTime : 2020-01-07 15:03:51
 * @Description: file content
 */
const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const outputModule = process.env.OUTPUT_MODULE;

module.exports = {
  presets: [
    [     
      "@babel/preset-env",
      {
        modules: outputModule || false
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    env === "test" && "@babel/plugin-transform-modules-commonjs"
  ].filter(Boolean)
};
