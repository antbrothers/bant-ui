/*
 * @Author: linjianxi
 * @Date: 2020-01-07 11:39:35
 * @LastEditTime: 2020-01-07 11:39:52
 * @Description: file content
 */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [2, 'always', [
        "feat", "fix", "docs", "style", "refactor", "test", "chore", "revert"
      ]],
      'subject-full-stop': [0, 'never'],
      'subject-case': [0, 'never']
    }
  };