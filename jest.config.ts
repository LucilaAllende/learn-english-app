import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Path to Next.js app to load next.config.js and .env files in test environment
  dir: './',
});

// For add any custom config to be passed to Jest
const customJestConfig = {
  // For add setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // transform: {
  //   '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
  // },
  moduleNameMapper: {
    // Handle module aliases (for next.config.js)
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);