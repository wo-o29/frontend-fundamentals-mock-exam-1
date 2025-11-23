import devServer from '@hono/vite-dev-server';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({ jsxImportSource: '@emotion/react' }),
    devServer({
      entry: './server.mjs',
      exclude: [/^(?!\/api).*/],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './feature'),
      '@feature': path.resolve(__dirname, './feature'),
      '@pages': path.resolve(__dirname, './pages'),
    },
  },
});
