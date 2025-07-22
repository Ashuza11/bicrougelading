import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
  },
  // CRITICAL FIX: For custom domains served from the root, base should be '/'
  base: '/', 
  css: {
    postcss: {
      plugins: [
        (await import('tailwindcss/nesting')).default,
        (await import('tailwindcss')).default,
        (await import('autoprefixer')).default,
      ]
    }
  }
})
