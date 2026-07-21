---
"@inkeep/mermaid-wysiwyg-core": minor
"@inkeep/mermaid-wysiwyg-dom": minor
"@inkeep/mermaid-wysiwyg-react": minor
"@inkeep/mermaid-wysiwyg-codemirror": minor
"@inkeep/mermaid-wysiwyg-monaco": minor
---

Textbox-grade inline editing: the canvas holds re-renders while an in-place
label session is typing (live commits still sync the code surfaces), long
labels stay on one line instead of wrapping into the clip, Escape reverts
reliably, and a swap already in flight carries typed text and caret across.

Popovers behave like part of the diagram: they anchor at the exact twin
element clicked, flip below the node instead of clipping in overflow-hidden
hosts, clamp horizontally, follow external pan/zoom transforms, and close on
any interaction outside the canvas.

New opt-in `panZoom` canvas option (DOM + React bindings): fit-to-canvas by
default, drag empty space to pan, pinch or ctrl+wheel to zoom at the cursor,
and corner zoom controls.

All packages are relicensed from GPL-3.0-or-later to MIT.
