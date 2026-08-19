# CLAUDE.md

Project guidance for Claude Code in this repository. The full conventions
(directory layout, stack, setup commands) live in `AGENTS.md` — read that
first. This file only adds Claude-specific notes.

## Before making changes

1. Read `AGENTS.md` for the directory conventions (`src/component` vs
   `src/layout` vs `src/lib`) — this repo intentionally deviates from the
   default `create-next-app` `components/` folder name, so don't "fix" it
   back.
2. Run `npm run build` after any non-trivial change — it both type-checks
   and builds, and is the fastest way to catch a broken import path after
   moving files.

## Working in this codebase

- When adding a new voting-related rule (e.g. changing eligibility logic,
  candidate list, or tallying), start in `src/lib/` — `data.ts` for static
  data, `schema.ts` for validation, `store.ts` for the tallying logic. Keep
  `src/component/VotingForm.tsx` thin; it should call into the store, not
  contain business rules itself.
- Prefer extending the existing Zustand store (`useElectionStore`) over
  introducing a second state-management mechanism (e.g. Context, Redux) —
  this app is small enough that one store is enough.
- Match the existing Tailwind dark theme (`bg-gray-900`, `bg-white/5`,
  `outline-white/10`, `text-white`/`text-gray-400`) rather than introducing
  a new palette, unless the user explicitly asks for a redesign.
- Don't reintroduce the plain HTML/vanilla-JS version (`index.html`,
  `script.ts`) that this project was ported from — this repo is the Next.js
  rebuild.

## Commands Claude should run

```bash
npm install       # after pulling or editing package.json
npm run dev        # local dev server
npm run build       # type-check + production build — run before finishing a task
npm run lint         # eslint (flat config, eslint.config.mjs)
```
