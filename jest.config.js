module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  reporters: ['default', 'jest-junit'],
  testResultsProcessor: 'jest-junit',
}
