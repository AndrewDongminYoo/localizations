# Andrew Yu — Korean Localization Specialist

A technical portfolio landing page for a Korean app localization specialist with a developer background. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Bilingual (EN / KO)** — custom i18n system powered by `useSyncExternalStore` and `localStorage`; no third-party i18n library
- **Dark / light theme** — via `next-themes`, defaults to dark
- **Mobile-first responsive design** — fixed navbar collapses to a hamburger menu on small screens
- **Single-page layout** with anchor-linked sections:

  | Section      | Description                                                                     |
  | ------------ | ------------------------------------------------------------------------------- |
  | Hero         | Headline, animated stat badges, CTA buttons                                     |
  | Metrics      | Four KPI cards (years, crashes, platforms, validation)                          |
  | Pillars      | "More Than Translation" — four value-proposition cards                          |
  | Workflow     | Interactive 5-step timeline                                                     |
  | Case Studies | Tabbed before/after examples (precision, cultural, disambiguation, conciseness) |
  | Skills       | Categorized tool grid with hover tooltips                                       |
  | Track Record | Partnership history, achievements, platform list                                |
  | Pricing      | Three-tier pricing cards                                                        |
  | Contact      | Enquiry form + Calendly CTA + direct contact info                               |

## Tech Stack

| Layer           | Choice                                          |
| --------------- | ----------------------------------------------- |
| Framework       | Next.js 16 (App Router)                         |
| UI              | React 19                                        |
| Language        | TypeScript 5 (strict)                           |
| Styling         | Tailwind CSS v4                                 |
| Components      | shadcn/ui (neutral base, CSS variables)         |
| Icons           | lucide-react                                    |
| Fonts           | Geist Sans, Geist Mono (via `next/font/google`) |
| Theming         | next-themes                                     |
| Package manager | pnpm                                            |

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

```bash
pnpm build      # production build
pnpm start      # serve production build
pnpm lint       # ESLint
```

Run tests for `lib/` utilities:

```bash
node --test --experimental-strip-types lib/**/*.test.ts
```

## Project Structure

```
app/
  layout.tsx          # root layout — ThemeProvider → I18nProvider
  page.tsx            # single page, composes all section components
  globals.css         # Tailwind base + CSS custom properties

components/
  navbar.tsx          # fixed header with locale/theme toggles
  hero-section.tsx
  metrics-dashboard.tsx
  pillars-section.tsx
  workflow-timeline.tsx
  case-studies-section.tsx
  skills-section.tsx
  track-record-section.tsx
  pricing-section.tsx
  contact-section.tsx
  footer.tsx
  theme-provider.tsx
  ui/                 # shadcn/ui primitives

lib/
  i18n/
    locale-store.ts   # pure locale read/write/subscribe functions
    context.tsx       # I18nProvider + useI18n() hook
    en.ts             # English dictionary (source of truth for Dictionary type)
    ko.ts             # Korean dictionary
  utils.ts            # cn() (clsx + tailwind-merge)
```

## i18n System

All copy lives in `lib/i18n/en.ts` and `lib/i18n/ko.ts`. The active locale is persisted in `localStorage` and synchronized across tabs via a `StorageEvent` listener.

```tsx
// In any client component:
const { t, locale, setLocale } = useI18n();

// Switch locale
setLocale("ko");

// Access copy
t.hero.badge; // "Available for new projects"
t.pricing.tiers[0]; // Starter tier object
```

`Dictionary` is inferred from `en.ts`, so TypeScript will error if `ko.ts` is missing a key.

### Adding a new locale

1. Create `lib/i18n/<locale>.ts` satisfying the `Dictionary` type.
2. Add it to the `dictionaries` record in `lib/i18n/context.tsx`.
3. Extend the `Locale` union and `resolveLocale` guard in `lib/i18n/locale-store.ts`.

## Customization

All user-facing text is in the dictionary files — editing `en.ts` / `ko.ts` is the only change needed to update any copy on the page.

Shadcn/ui theme tokens (colors, radius, etc.) are defined as CSS custom properties in `app/globals.css`. Run `pnpm dlx shadcn add <component>` to add new primitives.

## Code Conventions

- `type` imports required (`import { type Foo }`)
- Imports and JSX props are auto-sorted by ESLint (`simple-import-sort`, `perfectionist`)
- Components: PascalCase exports in kebab-case files
- Commits: Conventional Commits + gitmoji (e.g. `feat: ✨ ...`, `chore: 🔨 ...`)
- New domain terms should be added to `.cspell/custom-dictionary.txt`
