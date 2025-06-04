import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // 🔥 keep this if you're deploying to GitHub Pages under /Portfolio
  build: {
    outDir: 'docs'       // 🔧 this sends the production build to the docs folder
  }
});
