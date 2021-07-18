module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.*\\.(js)$': 'babel-jest'
  },
  setupFilesAfterEnv: ['./setupTests.js'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coveragePathIgnorePatterns: ['/node_modules/', '/src/store/'],
  coverageReporters: ['lcovonly', 'text'],
  testMatch: ['**/*pagination.spec.js', '**/*Spec.js', '**/*Spec.ts']
};
