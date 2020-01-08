/*
 * @Author: linjianxi
 * @Date: 2020-01-06 10:12:20
 * @LastEditTime: 2020-01-08 10:42:36
 * @Description: file content
 */
module.exports = {
  plugins: [
    require("autoprefixer")({
      overrideBrowserslist: [
        "last 2 versions", 
        "Android >= 4.4",
        "Firefox ESR",
        "not ie < 9",
        "ff >= 30",
        "chrome >= 34",
        "safari >= 6",
        "opera >= 12.1",
        "ios >= 6"
      ]
    })
  ]
};