# Task Completion Checklist

When finishing any code change, do the following before committing:

1. **Lint**: `pnpm lint` (fix all errors; warnings for exhaustive-deps are acceptable)
2. **Type-check**: `pnpm build` will catch TypeScript errors (`ignoreBuildErrors: false`)
3. **Tests** (if `lib/` code changed): `node --test --experimental-strip-types lib/**/*.test.ts`
4. **Spell check**: if new product names/terms were added, update `.cspell/custom-dictionary.txt`
5. **Dead code**: run `pnpm knip` if exports were removed or files restructured

## PR Guidelines

- Concise summary + linked issue/task when available
- Screenshots or screen recordings for visible UI changes
- Note any new commands, config updates, or follow-up work
