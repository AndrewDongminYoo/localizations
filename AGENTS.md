# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js 16 + React 19 + TypeScript app.
Use Node.js 24 and the pnpm version pinned in `package.json`. Localized route entrypoints live in `app/[locale]/`, shared UI sections live in `components/`, and lower-level primitives are in `components/ui/`. Keep reusable hooks in `hooks/` and shared logic in `lib/`; the locale dictionaries and store are in `lib/i18n/`. Static assets belong in `public/`. Root configs such as `eslint.config.mjs`, `.prettierrc.mjs`, `next.config.ts`, `cspell.config.yaml`, and `knip.json` define repository-wide tooling.

## Build, Test, and Development Commands

- `pnpm dev`: start the local Next.js dev server.
- `pnpm build`: create the production build.
- `pnpm start`: serve the built app locally.
- `pnpm lint`: run ESLint across the repo.
- `pnpm type-check`: run TypeScript without emitting files.
- `node --test --experimental-strip-types lib/**/*.test.ts`: run the current `node:test` TypeScript tests.

Run lint, type-check, tests, and the production build before opening a PR.
For focused checks, invoke ESLint directly: `pnpm exec eslint lib/i18n/context.tsx`.

## Coding Style & Naming Conventions

Use TypeScript with strict typing and React function components. Prettier enforces 2-space indentation, semicolons, double quotes, trailing commas (`es5`), and a `printWidth` of 100. ESLint enforces `type` imports, sorted imports/exports, React Hooks rules, and sorted JSX props.

Follow existing naming patterns:

- Components: PascalCase exports in kebab-case files, e.g. `components/hero-section.tsx`.
- Utilities and stores: kebab-case files, e.g. `lib/i18n/locale-store.ts`.
- Tests: `*.test.ts` next to the code they cover when practical.

## Testing Guidelines

The repo currently uses `node:test` for lightweight TypeScript tests under `lib/**/*.test.ts`. Add tests for new utility or state logic, especially in `lib/`. Keep tests deterministic and behavior-focused. If UI work is difficult to automate, at minimum include manual verification steps in the PR description.

## Commit & Pull Request Guidelines

Recent history uses Conventional Commit prefixes with gitmoji, for example `feat: ✨ implement robust locale management` and `chore: 🔨 add cspell configuration`. Keep the subject short and imperative.

PRs should include a concise summary, linked issue or task when available, and screenshots or screen recordings for visible UI changes. Note any new commands, config updates, or follow-up work explicitly.

## Configuration & Content Hygiene

Do not commit secrets; use local environment files that remain ignored. When adding new product names or domain-specific terms, update `.cspell/custom-dictionary.txt` if spellcheck flags them.

## Quality Gate

Run `python3 .trunk/configs/tests/test_trufflehog_to_sarif.py` to test the offline secret scanner adapter.
Trunk uses `--no-verification --no-update`; decoded findings without literal locations remain file-level findings.
Use `trunk check --all --no-fix` for the approved full maintenance scan.
Apply formatting only to explicit task-owned paths, for example `trunk fmt README.md`.
