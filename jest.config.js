module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest'
  },
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['lcovonly', 'text'],
  testMatch: ['**/*headerSpec.js', '**/*Spec.ts']
};
