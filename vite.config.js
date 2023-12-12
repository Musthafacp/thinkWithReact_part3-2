import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/thinkWithReact_part3-2/",
  plugins: [react()],
  server : {
    port : 3000,
  }
})

