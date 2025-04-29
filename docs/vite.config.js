import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webAlicura/', // Usa el nombre del repo tal cual
  plugins: [react()],
});