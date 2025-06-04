import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',           // 🔥 Changed from '/Portfolio/' to './' for Netlify
  build: {
    outDir: 'docs'      // 🔧 build output to docs folder
  }
});
