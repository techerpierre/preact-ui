import { resolve } from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'preact-ui',
      fileName: 'preact-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',  // Permet à Vite d'écouter sur toutes les interfaces réseau
    port: 5173,        // Tu peux choisir un autre port si nécessaire
    strictPort: true   // Optionnel, pour s'assurer que Vite n'utilise que ce port
  }
})
