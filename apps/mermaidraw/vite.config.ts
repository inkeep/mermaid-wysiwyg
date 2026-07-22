import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@inkeep/mermaid-wysiwyg-core', '@inkeep/mermaid-wysiwyg-dom', '@inkeep/mermaid-wysiwyg-react', '@inkeep/mermaid-wysiwyg-codemirror'],
    include: ['mermaid', 'react', 'react-dom', '@codemirror/state', '@codemirror/view', '@codemirror/commands', '@codemirror/language', '@lezer/highlight'],
  },
  server: {
    port: 5174,
    strictPort: true,
  },
})
