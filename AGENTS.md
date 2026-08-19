# AGENTS.md

Instructions for AI coding agents (Claude Code, Cursor, Copilot Workspace, etc.)
working in this repository.

## What this is

A Next.js (Pages Router) rebuild of the "Hackathon 3.0 Head of House Voting
System" — a small voting UI with a form, a live leaderboard, and a results
modal.

## Stack

- Next.js 14 (Pages Router), TypeScript
- Tailwind CSS
- Zustand for global state
- React Hook Form + Zod for form validation
- react-hot-toast for notifications

## Setup

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build, also type-checks
npm run lint
```

## Directory conventions (read before adding files)

```
src/
  pages/       Next.js routes (Pages Router). Keep route files thin —
               they should mostly assemble components from layout/ and component/.
  layout/      Page chrome: navbars, footers, shells. Not feature-specific.
  component/   Feature components (forms, cards, modals, buttons).
  lib/         Framework-agnostic logic: types, static data, zod schemas,
               the zustand store. No JSX here.
  styles/      Global CSS only. Prefer Tailwind utility classes in components
               over adding new global styles.
public/
  images/      Static image assets referenced with absolute paths (/images/...).
```

The `@/*` path alias points at `src/*` (see `tsconfig.json`). Always import
via the alias (`@/lib/store`, `@/component/VotingForm`, `@/layout/Navbar`)
rather than deep relative paths (`../../lib/store`).

## Conventions to follow

- **Don't add new folders at the repo root** for app code — everything
  feature-related goes under `src/`. Root-level config files (next.config.ts,
  tailwind.config.ts, etc.) are the only exception.
- **Business logic stays out of components.** Election tallying, validation
  rules, and static data belong in `lib/`; components only read from the
  zustand store and render.
- **Validation is Zod-first.** Add new form rules to `lib/schema.ts`, not as
  ad-hoc checks inside component handlers.
- **New feature components go in `src/component/`, one component per file,
  default-exported.** Only put something in `src/layout/` if it's structural
  chrome shared across pages (nav, footer, page shell).
- Keep components typed — avoid `any`; reuse the types in `lib/types.ts`.
- Run `npm run build` before considering a change done; it type-checks the
  whole project and will catch most integration mistakes.

## Known limitation

`bun.lock` in this repo may be stale or absent if dependencies were changed
with `npm`. If you use bun, regenerate it with `bun install` before relying
on it; don't hand-edit lockfiles.
