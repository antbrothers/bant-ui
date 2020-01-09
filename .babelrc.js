/*
 * @Author: linjianxi
 * @Date: 2019-12-27 17:33:13
 * @LastEditTime : 2020-01-09 16:04:14
 * @Description: file content
 */
const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const outputModule = process.env.OUTPUT_MODULE;
console.log('OUTPUT_MODULE:' + outputModule)
module.exports = {
  presets: [
    [     
      "@babel/preset-env",
      {
        modules: 'commonjs'
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
    "react-docgen",
    env === "test" && "@babel/plugin-transform-modules-commonjs"
  ].filter(Boolean)
};
