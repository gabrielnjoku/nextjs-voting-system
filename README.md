# Hackathon 3.0 Head of House Voting System (Next.js)

A Next.js (Pages Router) rebuild of the AfricaPlan Foundation voting UI, split
into reusable components with proper form validation and state management.

## Stack

- **Next.js 15** (Pages Router) + TypeScript
- **Tailwind CSS** for styling
- **Zustand** for global election state (poll counts, winner, voting record)
- **React Hook Form + Zod** for form validation (voter eligibility, required candidate)
- **react-hot-toast** for success/error notifications

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> This repo doesn't include a `bun.lock` — if you use bun, run `bun install`
> once to generate one; don't hand-edit or copy a lockfile from elsewhere.

## Project structure

```
public/
  images/            -> static image assets (referenced as /images/...)
  favicon.ico, *.svg -> default Next.js public assets
src/
  pages/
    _app.tsx          -> global styles + toast portal
    index.tsx          -> assembles Navbar, VotingForm, CheckResultButton, Leaderboard
  layout/
    Navbar.tsx          -> top nav bar (page chrome, not feature-specific)
  component/
    VotingForm.tsx        -> "Voter Name" + "Preferred Candidate" form (react-hook-form + zod)
    CheckResultButton.tsx -> button that opens the result modal
    ResultModal.tsx         -> "How Voters voted" dialog
    Leaderboard.tsx          -> live vote-count cards (bottom right)
  lib/
    types.ts    -> TCandidate, TVoters, TPoll, Result (ported from script.ts)
    data.ts     -> candidates list, eligible voters list, initial voting record
    schema.ts   -> zod schema: voter must be on the roll, candidate is required
    store.ts    -> zustand store: castVote() re-tallies poll + winner
  styles/
    globals.css -> Tailwind directives + base body styles
```

The `@/*` import alias points at `src/*` (see `tsconfig.json`), so components
import as `@/lib/store`, `@/component/VotingForm`, `@/layout/Navbar`, etc.

See `AGENTS.md` for conventions AI coding agents (and human contributors)
should follow when extending this project, and `CLAUDE.md` for Claude
Code-specific notes.

## Notes on the original `script.ts` logic

- Every voter in the roll starts with a pre-assigned candidate choice
  (`initialVotingRecord` in `src/lib/data.ts`), same as the original.
- Casting a vote overwrites that voter's entry, then the whole poll is
  re-tallied from scratch (`tally()` in `src/lib/store.ts`), which mirrors
  the original `vote()` + `election()` functions.
- Voter eligibility is checked case-insensitively against the `voters` list,
  same as the original `.find()` + `.toLowerCase()` comparison.
- The "not eligible to vote" `window.alert` was replaced with a toast
  notification, and inline field errors were added via zod for a11y/UX.

## Extending it

- Add more candidates/voters in `src/lib/data.ts` — types in `src/lib/types.ts`
  should be kept in sync (`TCandidate`, `TVoters`).
- To persist votes across reloads, swap the in-memory zustand store for
  zustand's `persist` middleware, or wire it up to an API route.
