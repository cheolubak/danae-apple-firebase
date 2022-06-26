import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'jest.*.*'],
  coverageDirectory: './coverage',
};
export default config;
