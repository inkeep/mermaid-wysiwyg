import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@inkeep/mermaid-wysiwyg-core', '@inkeep/mermaid-wysiwyg-dom', '@inkeep/mermaid-wysiwyg-codemirror', '@inkeep/mermaid-wysiwyg-react'],
    include: ['mermaid', '@mermaid-js/mermaid-zenuml', 'react', 'react-dom'],
  },
  server: {
    port: 5173,
    strictPort: true,
  },
})
