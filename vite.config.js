// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': '/src' } },
  server: {
    proxy: {
      // Proxy para la API
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      // Proxy para la interfaz del backend (Admin, Swagger, etc.)
      '/backend': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ''),
      },
    },
  },
})
