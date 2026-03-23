# Project Overview

## Purpose

Single-page portfolio/landing page for Andrew Yu, a Korean localization specialist. The site showcases services, workflow, case studies, skills, pricing, and a contact form — all with English/Korean language switching.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Component Library**: shadcn/ui (components in `components/ui/`)
- **Package Manager**: pnpm
- **Fonts**: Geist Sans, Geist Mono (via next/font/google)
- **Theming**: next-themes (dark default)
- **Icons**: lucide-react

## Codebase Structure

```
app/             # Next.js App Router entrypoints (layout.tsx, page.tsx, globals.css)
components/      # Page section components (hero-section, navbar, pricing-section, etc.)
components/ui/   # shadcn/ui primitives (badge, button, input, tabs, tooltip, etc.)
lib/i18n/        # Custom i18n system (locale-store.ts, context.tsx, en.ts, ko.ts)
lib/utils.ts     # cn() utility (clsx + tailwind-merge)
public/          # Static assets
```

## Path Alias

`@/*` maps to the repo root (e.g. `@/lib/i18n/context` → `lib/i18n/context.tsx`).

## Provider Tree (app/layout.tsx)

```
ThemeProvider (next-themes, dark default)
  └── I18nProvider
        └── page content
```
