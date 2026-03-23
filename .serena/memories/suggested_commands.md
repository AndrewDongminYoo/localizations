# Suggested Commands

## Development

```bash
pnpm dev          # start Next.js dev server (http://localhost:3000)
pnpm build        # production build
pnpm start        # serve production build locally
```

## Linting & Formatting

```bash
pnpm lint                    # run ESLint across entire repo
pnpm lint -- <path>          # lint a specific file or directory
```

Prettier is configured via `.prettierrc.mjs` — formatting is enforced by ESLint via `eslint-config-prettier`.

## Testing

```bash
node --test --experimental-strip-types lib/**/*.test.ts
```

Uses Node.js built-in `node:test` runner (NOT Jest) for files under `lib/`.

## Dead Code Detection

```bash
pnpm knip        # detect unused exports/files (knip.json config)
```

## Spell Check

cspell is configured via `cspell.config.yaml`. Custom dictionary at `.cspell/custom-dictionary.txt`.

## Git / System

Standard macOS/Darwin tools: git, ls, find, grep, etc.
