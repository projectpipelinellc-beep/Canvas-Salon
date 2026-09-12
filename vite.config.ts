import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Multi-page build: the Privacy Policy and Terms pages are separate
      // static pages (not client-side routes), each with its own React
      // root, so they load fast and work with a direct link to /privacy.html
      // or /terms.html on any static host.
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
      },
    },
  },
})
