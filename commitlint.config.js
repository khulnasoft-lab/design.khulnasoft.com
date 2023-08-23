module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    'scope-case': [1, 'always', ['lower-case', 'pascal-case']],
    'subject-case': [1, 'always', 'sentence-case'],
  },
};
