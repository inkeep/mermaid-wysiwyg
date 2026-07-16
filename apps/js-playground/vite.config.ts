import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    // workspace TS sources are transformed directly, never pre-bundled
    exclude: ['@inkeep/mermaid-wysiwyg-core', '@inkeep/mermaid-wysiwyg-dom', '@inkeep/mermaid-wysiwyg-codemirror'],
    // pre-bundle heavy deps up front so a mid-session discovery (e.g. the lazy
    // zenuml import) never invalidates the dep cache under an open tab
    include: ['mermaid', '@mermaid-js/mermaid-zenuml', '@codemirror/state', '@codemirror/view', '@codemirror/commands', '@codemirror/language', '@lezer/highlight'],
  },
  server: {
    port: 5174,
    strictPort: true,
  },
})
