# @inkeep/mermaid-wysiwyg-codemirror

CodeMirror 6 pane for [mermaid-wysiwyg](https://github.com/inkeep/mermaid-wysiwyg):
two-way sync with the editing engine (canvas changes apply as exact minimal edits),
entity selection as decorations, caret → entity selection, mermaid syntax highlighting,
and ⌘Z routed to the engine's unified history, the same undo stack the canvas uses.

```ts
import { MermaidWysiwygEditor } from '@inkeep/mermaid-wysiwyg-core'
import { MermaidCodeMirror } from '@inkeep/mermaid-wysiwyg-codemirror'

const editor = new MermaidWysiwygEditor({ code: 'flowchart TD\n  A --> B' })
new MermaidCodeMirror(hostElement, editor)
```

Docs: [github.com/inkeep/mermaid-wysiwyg](https://github.com/inkeep/mermaid-wysiwyg)
