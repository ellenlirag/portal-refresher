// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuração do Vite para deploy no GitHub Pages
// IMPORTANTE: o "base" deve ser exatamente o nome do repositório entre barras
export default defineConfig({
  base: '/portal-refresher/',   // ← necessário para o Pages
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
