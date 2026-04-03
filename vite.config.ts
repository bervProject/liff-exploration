import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: ['tests/e2e/**', 'node_modules/**'],
    coverage: {
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/main.ts'],
    },
  },
});
