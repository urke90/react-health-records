import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/router': path.resolve(__dirname, './src/router'),
      '@/assets': path.resolve(__dirname, './src/assets'),
    },
  },
});
