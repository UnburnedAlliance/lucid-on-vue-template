import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  experiments: {
    "asyncWebAssembly": true,
    "topLevelAwait": true,
    "layers": true // optional, with some bundlers/frameworks it doesn't work without
  }
})
