module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-case': [1, 'always', ['lower-case', 'pascal-case']],
    'subject-case': [1, 'always', 'sentence-case'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'build', 'ci', 'chore', 'revert'],
    ],
  },
};
