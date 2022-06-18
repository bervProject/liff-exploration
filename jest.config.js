module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,vue}', '!src/main.ts'],
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/tests/e2e/',
    '<rootDir>/node_modules/',
  ],
  setupFiles: [
    '<rootDir>/tests/unit/setup.ts',
  ],
};
