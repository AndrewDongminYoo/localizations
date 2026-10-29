# Quality Tooling Refresh Plan

## Work

1. Verify repository identity, instructions, current changes and Oracle precedent.
2. Refresh compatible dependency and linter versions with existing package managers.
3. Run the declared local gates and `trunk check --all --no-fix`.
4. Reconcile affected knowledge and review the scoped candidate.
5. Commit locally and prepare visible evidence before requesting publication approval.

## Declared Gates

- `pnpm install --frozen-lockfile`
- `pnpm lint`
- `pnpm type-check`
- `node --test --experimental-strip-types lib/**/*.test.ts`
- `pnpm build`
- `trunk check --all --no-fix`

## Compatibility and Evidence

Keep TypeScript at `~6.0.3` because `typescript-eslint@8.72.1` requires TypeScript `<6.1.0`; latest TypeScript `7.0.2` is outside that peer range.
Keep the existing pnpm 11 CI contract and align it with the latest stable 11 release, `11.28.9`; registry latest `12.16.1` is a new major and is not the verified runner for this candidate.
Update existing security override versions within their installed major lines and regenerate the lockfile with pnpm.
The package manager generated exact release-age exceptions for the two explicitly requested fresh direct updates; no broad release-age exemption is added.
Verify CSpell with managed Node `22.23.4` and native failure/clean controls, and preserve the existing formatter-hook policy.
Use the shared offline reader and its CLI regression suite, plus actual TruffleHog and Trunk encoded/literal/clean controls.
Application source, style, and asset bytes must match the protected input inventory.
Build the actual localized production routes; this work has no intended UI or copy change.

## Oracle

The personal Oracle returned global Trunk precedents from `wiki/concepts/trunk-quality-gate-agent.md` and `raw/sources/.claude/agents/trunk-quality-gate.md` at source commit `9670d54de3076c5239713f54900c7a855bd18478`.
They confirm no-fix diagnosis, explicitly authorized `--all`, exact Pinact references, and hook-failure diagnosis without bypasses.
The source freshness is unverified and the returned result window was partial; no project-specific test precedent was returned.
Use the current manifest and CI as the minimum-gate authority.

## Hosted Review Repair

Reproduce the repeated-secret source-line and out-of-order metadata failures through the reader CLI before changing the location selection.
Use a reported filesystem line only after confirming that it contains the literal finding.
Keep existing fallback, malformed-input and secret-free-message behavior.
The native scanner's controlled JSONL confirms the optional integer `Filesystem.line` field.
Update both new-locale checklists for alternates and structured-data language lists.
Use direct `corepack pnpm` commands in the fresh setup guide, without requiring a global shim mutation.
An isolated PATH with Node and Corepack but no pnpm shim must reject bare pnpm and pass pinned-version and actual type-check commands through Corepack.
