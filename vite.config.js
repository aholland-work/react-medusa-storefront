import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Medusa uses CORS to only allow specific origins to access the server. By default, it looks at port 8000.
    //https://docs.medusajs.com/usage/configurations/#storefront-cors
    port: 8000,
  },
})
