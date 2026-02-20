import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pkg from './package.json'

export default defineConfig({
  base: '/portafolio/',
  server: {
    host: '127.0.0.1',
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 800,
  },
  plugins: [react()],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
})
