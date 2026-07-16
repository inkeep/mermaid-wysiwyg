# @inkeep/mermaid-wysiwyg-dom

Interactive WYSIWYG canvas for [Mermaid](https://mermaid.js.org): renders through your
`mermaid` instance for full fidelity, then overlays selection, drag-to-connect,
in-place text editing, entity popovers (shapes, arrow types, colors, cardinalities),
and keyboard editing, every gesture compiled to a minimal source edit by
[`@inkeep/mermaid-wysiwyg-core`](https://npmjs.com/package/@inkeep/mermaid-wysiwyg-core).

```ts
import mermaid from 'mermaid'
import { MermaidWysiwygEditor } from '@inkeep/mermaid-wysiwyg-core'
import { MermaidCanvasView } from '@inkeep/mermaid-wysiwyg-dom'

const editor = new MermaidWysiwygEditor({ code: 'flowchart TD\n  A --> B' })
new MermaidCanvasView({ editor, container: el, mermaid })
```

Docs: [github.com/inkeep/mermaid-wysiwyg](https://github.com/inkeep/mermaid-wysiwyg)
