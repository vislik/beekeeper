import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const basePath = process.env.VITE_BASE_PATH || (repoName ? `/${repoName}/` : '/');

export default defineConfig(({ command }) => ({
  // In local dev use root path; in CI build for Pages use repository subpath.
  base: command === 'serve' ? '/' : basePath,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}));
