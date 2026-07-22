# mermaidraw

The public showcase for [`@inkeep/mermaid-wysiwyg`](../..) — a live playground
that renders Mermaid diagrams and lets you edit them by clicking nodes, dragging
to connect, and rewriting labels in place. Deployed to
[mermaidraw.com](https://mermaidraw.com) (Vite, static build).

## Local dev

```bash
pnpm --filter mermaidraw dev      # from repo root, or `pnpm run dev` here
pnpm --filter mermaidraw build
```

Serves on `http://localhost:5174`; edits to the underlying `packages/*` hot-reload.

## Where this came from

mermaidraw is built out of the direct-manipulation editing patterns in
[Open Knowledge](https://github.com/inkeep/open-knowledge) — the same
click-a-node-to-edit surface that ships inside OK's `.mmd` and Markdown editors,
lifted out as a standalone toolkit anyone can drop into their own app.
