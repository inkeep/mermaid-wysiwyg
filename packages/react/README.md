# @inkeep/mermaid-wysiwyg-react

React bindings for [mermaid-wysiwyg](https://github.com/inkeep/mermaid-wysiwyg):
a drop-in visual Mermaid editor component. Click, drag, and type directly on the
diagram; the `code` prop stays in sync with minimal text edits.

```tsx
import { useState } from 'react'
import mermaid from 'mermaid'
import { MermaidWysiwyg } from '@inkeep/mermaid-wysiwyg-react'

function App() {
  const [code, setCode] = useState('flowchart TD\n  A[Start] --> B{OK?}')
  return <MermaidWysiwyg code={code} onCodeChange={setCode} mermaid={mermaid} />
}
```

Also exports `MermaidCanvas` (bring your own editor instance) and
`useMermaidEditor` (own the engine, re-render on change/selection).

Docs: [github.com/inkeep/mermaid-wysiwyg](https://github.com/inkeep/mermaid-wysiwyg)
