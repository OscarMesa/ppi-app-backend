/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

// eslint-disable-next-line import/no-default-export
export default {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: './src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.service.(t|j)s',
    '**/common/pipes/*',
    '**/common/guards/*',
    '!**/plugins/**',
    '!**/cluster.service.ts',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  moduleNameMapper: {
    '@common/(.*)': '<rootDir>/common/$1',
    '@health/(.*)': '<rootDir>/health/$1',
    '@config/(.*)': '<rootDir>/config/$1',
    '@database/(.*)': '<rootDir>/database/$1',
    '@global/(.*)': '<rootDir>/global/$1',
    '@plugins/(.*)': '<rootDir>/plugins/$1',
    '@scripts/(.*)': '<rootDir>/scripts/$1',
    '@swagger/(.*)': '<rootDir>/swagger/$1',
    '@utils/(.*)': '<rootDir>/utils/$1',
    '@users/(.*)': '<rootDir>/users/$1',
    '@entities/(.*)': '<rootDir>/entities/$1',
    '@firebase/(.*)': '<rootDir>/firebase/$1',
    '@auth/(.*)': '<rootDir>/auth/$1',
  },
  reporters: ['default'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  coverageThreshold: {
    global: {
      lines: 60,
      branches: 20,
      functions: 60,
    },
  },
  //setupFiles: ['<rootDir>/setupTests.ts'],
};
