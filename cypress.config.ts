import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'tests/e2e/specs/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'tests/e2e/support/index.js',
    setupNodeEvents(on, config) {
      return config;
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
      viteConfig,
    },
  },
});
