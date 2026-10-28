# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm**, pinned in `package.json`; CI uses Node.js 24.

```bash
pnpm dev          # start Next.js dev server
pnpm build        # production build
pnpm start        # serve the built app
pnpm lint         # run ESLint
pnpm exec eslint <path> # lint a specific file/dir
pnpm type-check   # tsc --noEmit

# Run TypeScript tests (node:test, not Jest)
node --test --experimental-strip-types lib/**/*.test.ts
# Run a single test file
node --test --experimental-strip-types lib/i18n/locale-store.test.ts

# Find unused files/exports/dependencies
pnpm exec knip
```

Run lint, type-check, tests, and the production build before opening a PR.
Run `python3 .trunk/configs/tests/test_trufflehog_to_sarif.py` for the offline secret scanner adapter.
Trunk uses `--no-verification --no-update` and preserves decoded findings without literal locations as file-level findings.
Use `trunk check --all --no-fix` for the approved full maintenance scan and explicit paths for formatting, for example `trunk fmt README.md`.

Dependency build scripts (sharp, unrs-resolver) are approved via `allowBuilds` in `pnpm-workspace.yaml`; security overrides for transitive dependencies live there too, each annotated with its GHSA id.

## Architecture

This is a **single-page portfolio/landing page** for a Korean localization specialist. It is a Next.js 16 App Router app (React 19, TypeScript, Tailwind CSS v4, shadcn/ui).

### Directory layout

- `app/[locale]/` — localized Next.js route entrypoints (`layout.tsx`, `page.tsx`); shared styles live in `app/globals.css`
- `components/` — Page sections (one component per section: hero, navbar, pricing, etc.)
- `components/ui/` — shadcn/ui primitives (badge, button, input, tabs, etc.)
- `lib/i18n/` — Custom i18n system (see below)
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

### i18n system

The app uses a **custom i18n implementation** — no next-intl, react-i18next, or similar library. It is built on `useSyncExternalStore` with `localStorage` as the backing store.

The store, context, and dictionaries form a layered design:

1. **`lib/i18n/locale-store.ts`** — Pure functions. Reads/writes locale to `localStorage`, dispatches a custom `localechange` DOM event on change, and provides `subscribeToLocale` and `getLocaleSnapshot` for `useSyncExternalStore`.

2. **`lib/i18n/context.tsx`** — React integration. `I18nProvider` calls `useSyncExternalStore` with the store functions to derive the current locale reactively, with the route locale as the server snapshot and initial fallback. Exposes `useI18n()` which returns `{ locale, setLocale, t }`. The `t` value is the full typed dictionary for the active locale.

3. **`lib/i18n/en.ts` / `lib/i18n/ko.ts`** — Flat nested dictionaries. `Dictionary` type is inferred from `en.ts` (`export type Dictionary = typeof en`) and `ko.ts` is annotated with it. Dictionary keys are section-namespaced (e.g. `t.hero.badge`, `t.pricing.tiers`).

To add a new locale, add a dictionary file that satisfies `Dictionary`, register it in the `dictionaries` map in `context.tsx`, extend the `Locale` union and `resolveLocale` guard in `locale-store.ts`, and update `generateStaticParams` and locale metadata in `app/[locale]/layout.tsx`.

### Provider tree

```log
ThemeProvider (next-themes, dark default)
  └── I18nProvider
        └── page content
```

### Path alias

`@/*` maps to the repo root (e.g. `@/lib/i18n/context` → `lib/i18n/context.tsx`).

## Coding conventions

- TypeScript strict mode; always use `type` imports (`import { type Foo }`)
- Prettier: 2-space indent, double quotes, semicolons, trailing commas (`es5`), `printWidth: 100`
- ESLint enforces sorted imports (`simple-import-sort`), sorted JSX props (`perfectionist`), and React Hooks rules
- Components: PascalCase exports in kebab-case files (e.g. `components/hero-section.tsx`)
- Tests: `*.test.ts` co-located next to the file they cover; use `node:test` (not Jest) for `lib/` utilities
- In test files, relative imports must include the `.ts` extension (e.g. `from "./locale-store.ts"`) — Node's type stripping does not resolve imports without extensions; `allowImportingTsExtensions` is enabled in tsconfig for this

## Commits

Use Conventional Commits with gitmoji, e.g.:

- `feat: ✨ implement robust locale management`
- `chore: 🔨 add cspell configuration`

When adding new product names or technical terms, update `.cspell/custom-dictionary.txt` if spellcheck flags them.
