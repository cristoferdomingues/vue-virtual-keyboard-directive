const merge = require('lodash.merge');
const config = require('kcd-scripts/jest');

module.exports = merge(config, {
  preset: '@vue/cli-plugin-unit-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'vue'],
  moduleNameMapper: {
    '@testing-library/vue': '<rootDir>/test.config/index.js',
  },
  coverageDirectory: './coverage',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/__tests__/**'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  transformIgnorePatterns: [],
});
