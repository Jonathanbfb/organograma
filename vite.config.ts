import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
 
  plugins: [react()],
base: '/indicadores', 
  server: {
    allowedHosts: ['www.fieam.com.br'],
    host: true,  
    hmr: {
      host: 'www.fieam.com.br',
      port: 443, // Porta padrão para HTTPS (se estiver usando HTTPS)
    },
    
  },
  
  build: {
    outDir: 'dist', 
  },
})






