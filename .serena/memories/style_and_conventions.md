# Style & Conventions

## TypeScript

- Strict mode enabled
- Always use `type` imports: `import { type Foo }` or `import type { Foo }`
- `@typescript-eslint/consistent-type-imports` is enforced as error
- Unused vars rule is strict (prefix with `_` to suppress)

## Prettier (`.prettierrc.mjs`)

- 2-space indentation
- Double quotes
- Semicolons: yes
- Trailing commas: `es5`
- `printWidth`: 100
- `prettier-plugin-tailwindcss` for class sorting

## ESLint (`eslint.config.mjs`)

- `simple-import-sort`: sorted imports and exports (enforced as error)
- `perfectionist/sort-jsx-props`: sorted JSX props (natural, ascending)
- `react-hooks/rules-of-hooks`: error
- `react-hooks/exhaustive-deps`: warning
- Next.js Core Web Vitals rules included
- Files under `lib/**/*.test.ts` use `node:test` — Jest rules are disabled for them

## Naming Conventions

- **Components**: PascalCase exports in kebab-case files, e.g. `components/hero-section.tsx`
- **Utilities/stores**: kebab-case files, e.g. `lib/i18n/locale-store.ts`
- **Tests**: `*.test.ts` co-located next to the file they cover

## Commits

Conventional Commits + gitmoji:

- `feat: ✨ implement robust locale management`
- `chore: 🔨 add cspell configuration`
- `refactor: ♻️ remove const assertion from i18n dictionaries`

Subject should be short and imperative.

## shadcn/ui

Base color: neutral. CSS variables enabled. Icon library: lucide-react.
New components added via `shadcn` CLI into `components/ui/`.
