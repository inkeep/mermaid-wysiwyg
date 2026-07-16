import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@mermaid-wysiwyg/core', '@mermaid-wysiwyg/dom', '@mermaid-wysiwyg/codemirror', '@mermaid-wysiwyg/react'],
    include: ['mermaid', '@mermaid-js/mermaid-zenuml', 'react', 'react-dom'],
  },
  server: {
    port: 5173,
    strictPort: true,
  },
})
