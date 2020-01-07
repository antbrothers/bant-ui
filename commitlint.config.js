/*
 * @Author: linjianxi
 * @Date: 2020-01-06 18:03:29
 * @LastEditTime: 2020-01-06 18:03:50
 * @Description: file content
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'subject-case': [2, 'always', ['upper-case']]
    }
  };