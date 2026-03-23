# i18n Architecture

Custom i18n system — no next-intl, react-i18next, or similar library.
Built on `useSyncExternalStore` with `localStorage` as backing store.

## Supported Locales

- `en` (default)
- `ko`

## File Responsibilities

### `lib/i18n/locale-store.ts`

Pure functions layer:

- Reads/writes locale to `localStorage` under key `"locale"`
- On change, dispatches custom `"localechange"` DOM event
- Exports `subscribeToLocale`, `getLocaleSnapshot`, `getLocaleServerSnapshot` — the three callbacks for `useSyncExternalStore`
- Also exports `persistLocale`, `readStoredLocale`, `resolveLocale`, `DEFAULT_LOCALE`, `Locale` type

### `lib/i18n/context.tsx`

React integration layer (`"use client"`):

- `I18nProvider`: calls `useSyncExternalStore` to reactively derive current locale; sets `document.documentElement.lang` on change; provides `{ locale, setLocale, t }` via context
- `useI18n()`: hook to consume the context (throws if used outside provider)
- `t` is the full typed dictionary for the active locale

### `lib/i18n/en.ts` / `lib/i18n/ko.ts`

Dictionary files:

- `en.ts` is the source of truth; `Dictionary` type is inferred from it
- `ko.ts` must satisfy `Dictionary`
- Keys are section-namespaced: `t.hero.badge`, `t.nav.metrics`, `t.pricing.tiers`, etc.

## Adding a New Locale

1. Create `lib/i18n/<locale>.ts` satisfying `Dictionary`
2. Register in `dictionaries` map in `context.tsx`
3. Extend `Locale` union in `locale-store.ts`
4. Update `resolveLocale()` to accept the new value

## Testing

`lib/i18n/locale-store.test.ts` uses `node:test` to test `resolveLocale` and `readStoredLocale`.
