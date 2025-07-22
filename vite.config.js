import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 3000,
  },
  base: '/bicrougelading/', 
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
