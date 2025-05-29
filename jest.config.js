module.exports = {
  preset: 'jest-gas',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'gs'],
  testMatch: ['**/__tests__/**/*.test.js'],
  setupFilesAfterEnv: ['./jest.setup.js']
};