# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js 16 + React 19 + TypeScript app. Route entrypoints live in `app/`, shared UI sections live in `components/`, and lower-level primitives are in `components/ui/`. Keep reusable hooks in `hooks/` and shared logic in `lib/`; the locale dictionaries and store are in `lib/i18n/`. Static assets belong in `public/`. Root configs such as `eslint.config.mjs`, `.prettierrc.mjs`, `next.config.ts`, `cspell.config.yaml`, and `knip.json` define repository-wide tooling.

## Build, Test, and Development Commands

- `npm run dev`: start the local Next.js dev server.
- `npm run build`: create the production build.
- `npm run start`: serve the built app locally.
- `npm run lint`: run ESLint across the repo.
- `node --test --experimental-strip-types lib/**/*.test.ts`: run the current `node:test` TypeScript tests.

Run lint before opening a PR. For focused checks, pass a path: `npm run lint -- lib/i18n/context.tsx`.

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
