/*
 * @Author: linjianxi
 * @Date: 2019-07-29 03:00:10
 * @LastEditTime: 2020-01-03 16:22:04
 * @Description: file content
 */
module.exports = {
  verbose: true,
  setupFiles: ["./tests/setup.js"],
  moduleFileExtensions: ["js", "jsx", "json"],
  coveragePathIgnorePatterns: [
    "/components/index.js",
    "/components/styles",
    // newFunction(),
    // "/components/icon",
    // "/components/form",
    // "/components/wordPad",
    // "/components/dropdown",
    // "/components/styles"
  ],
  transformIgnorePatterns: ["/node_modules/", ".history/*", "lib", "dist"],
  modulePathIgnorePatterns: ["/.history/", "lib", "dist"],
  moduleDirectories: ["node_modules", ".", "src", "src/shared"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverageFrom: [
    "components/**/*.{js,jsx}",
    "!components/**/style.{js,jsx}"
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testURL: "http://localhost",
  rootDir: __dirname,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.js"
  }
};
function newFunction() {
  return "/components/version";
}

