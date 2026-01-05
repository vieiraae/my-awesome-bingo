# Copilot Instructions for My Awesome Bingo

## Pre-Commit Checklist
- [ ] `npm run lint` — ESLint passes
- [ ] `npm run build` — TypeScript + Vite build succeeds
- [ ] `npm run test` — All Vitest tests pass

## Project Overview
Mobile-first social bingo game: React 19 + TypeScript + Vite + Tailwind CSS v4. Players find people matching prompts and tap squares to mark them, aiming for 5-in-a-row.

## Architecture
```
useBingoGame (hook) → App.tsx → Screen Components → BingoBoard → BingoSquare
         ↓
   localStorage (versioned persistence)
```

| File | Purpose |
|------|---------|
| `src/utils/bingoLogic.ts` | Pure game logic (board gen, toggle, win detection) — fully tested |
| `src/hooks/useBingoGame.ts` | React state + localStorage with `STORAGE_VERSION` migrations |
| `src/data/questions.ts` | 24 social/icebreaker prompts + `FREE_SPACE` constant |
| `src/types/index.ts` | Domain types: `BingoSquareData`, `BingoLine`, `GameState` |

## Conventions
- **Components**: Named exports, `{Name}Props` interface, `aria-pressed`/`aria-label` for a11y
- **Styling**: Tailwind v4 with `@theme { }` tokens in `src/index.css`; mobile-first with `active:` states
- **Testing**: Co-located tests (`*.test.ts`); prioritize pure logic over component tests
- **Persistence**: Validate with `validateStoredData()` before restoring; SSR-safe with `typeof window` guards

## Adding Features
- **New prompts**: Edit `src/data/questions.ts` (keep ≥24 items, social/icebreaker-themed)
- **New logic**: Add to `bingoLogic.ts` → write tests → wire into `useBingoGame` hook
- **New components**: Create in `src/components/` with typed props; import types from `src/types/index.ts`

## Deployment
Auto-deploys to GitHub Pages on push to `main`. Base path via `VITE_REPO_NAME` env var.

