<div align="center">

# mermaid-wysiwyg

**Visual editing for Mermaid diagrams. Every gesture becomes a minimal text edit.**

Click, drag, and type directly on the diagram; your Mermaid source updates surgically.
Type in the code; the canvas follows live. One document, two surfaces, zero lock-in.

[![GPL-3.0](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](./LICENSE)
[![Mermaid 11](https://img.shields.io/badge/mermaid-v11-ff3670.svg)](https://mermaid.js.org)
[![Types](https://img.shields.io/badge/types-included-3178c6.svg)](#packages)

</div>

---

## Why

Everyone writes Mermaid code to *view* diagrams. Editing them visually meant proprietary
tools or one-way exporters. `mermaid-wysiwyg` keeps **text as the source of truth**: the
canvas is Mermaid's own SVG with an interaction layer on top, and every visual action
(rename, connect, reorder, restyle) compiles to the smallest possible edit against your
actual source. Comments, whitespace, and formatting are never touched. Drag one edge,
get a one-line diff.

## Quick start

```bash
npm i @mermaid-wysiwyg/core @mermaid-wysiwyg/dom mermaid
```

```ts
import mermaid from 'mermaid'
import { MermaidWysiwygEditor } from '@mermaid-wysiwyg/core'
import { MermaidCanvasView } from '@mermaid-wysiwyg/dom'

const editor = new MermaidWysiwygEditor({
  code: 'flowchart TD\n  A[Start] --> B{OK?}\n  B -->|yes| C[Ship]',
})

new MermaidCanvasView({
  editor,
  container: document.querySelector('#canvas')!,
  mermaid,
  mermaidConfig: { theme: 'dark' },
})

editor.on('change', ({ code }) => console.log(code)) // always-current source
```

Try everything locally:

```bash
pnpm install && pnpm dev   # playground at http://localhost:5173
```

## What you can do

- **Edit text in place**: double-click any label and type right on the diagram; nodes grow as you type
- **Drag to connect** nodes, states, classes, entities, participants, with a ghost edge preview
- **Drag to reorder** sequence messages; the statements reorder in source
- **Popovers on every entity**: shape/type/arrow pickers, cardinalities, color swatches, fragments, notes
- **One undo stack** across canvas and code (⌘Z anywhere)
- **Error tolerant**: broken syntax mid-keystroke never blanks the canvas
- **Lossless**: unknown syntax is preserved verbatim; your diff is only what you changed

## Diagram support

**22 of 23 Mermaid diagram types are editable.**

| Depth | Types |
|---|---|
| Deep semantic ops | flowchart, sequence, state, class, ER, pie, gantt |
| Line-item editing (select · edit in place · add · delete) | journey, timeline, quadrant, kanban, mindmap, treemap, packet, sankey, radar, gitgraph, xychart, requirement, C4, architecture, block |
| Render only | zenuml (external plugin) |

Every type renders, round-trips losslessly, and syncs selection between code and canvas.

## Packages

| Package | Purpose |
|---|---|
| `@mermaid-wysiwyg/core` | Headless engine: lossless CST, semantic graphs, ops → minimal text edits, unified history. Zero DOM deps |
| `@mermaid-wysiwyg/dom` | Interactive canvas: renders through your `mermaid` instance, correlates SVG ⇄ graph, all gestures |
| `@mermaid-wysiwyg/codemirror` | CodeMirror 6 pane: two-way sync, entity decorations, mermaid syntax highlighting, shared undo |
| `@mermaid-wysiwyg/monaco` | Monaco binding for an editor instance you own; zero monaco dependency of its own |
| `@mermaid-wysiwyg/react` | React bindings: `<MermaidWysiwyg code onCodeChange />` drop-in component plus `useMermaidEditor` hook |

The code-editor integration is a contract, not a dependency. `core` exposes
`bindTextPane`, a five-method adapter that gives any editor the same two-way sync;
the CodeMirror and Monaco packages are implementations of it, and neither is pulled
in unless you install it (editor libraries are peer dependencies or absent entirely).
Some other editor? Implement the adapter, it's about forty lines.

## Design

```
      code (source of truth)
        ⇅ minimal TextEdits
   lossless CST → semantic graph
        ⇅                ⇅
  CodeMirror pane   Mermaid SVG + overlay
```

## How the canvas works

We never re-implement rendering. Mermaid draws the SVG, untouched. A small per-type correlator then matches every element back to its source line, using id conventions, draw order, or label text, and tags it. All interaction hangs off those tags.

Anything we can't match degrades to view-only; the diagram still renders perfectly and the code stays editable. The tradeoff is that correlation leans on Mermaid's internal DOM, which can shift between releases. It's contained, because correlators are tiny, isolated, and fail soft. That's the price of pixel-perfect fidelity, and it beats owning a renderer that's wrong in a hundred small ways.

## License

[GPL-3.0-or-later](./LICENSE) © [Inkeep](https://inkeep.com)
