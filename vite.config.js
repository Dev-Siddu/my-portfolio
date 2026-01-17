import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    // If building for GitHub Pages, use the repo name, otherwise use root.
    base: mode === 'gh-pages' ? '/my-portfolio/' : '/',
    build: {
      outDir: 'dist',
    }
  }
})