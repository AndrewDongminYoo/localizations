# Quality Tooling Refresh

## Approved Scope

Refresh supported dependencies and existing quality tooling.
Preserve public APIs, generated artifacts and repository-specific boundaries.

## Acceptance

- Pinact remains locked to `4.1.1` with `lint` and `upgrade`.
- The full no-fix Trunk scan and declared project gates pass.
- Changed manifests have package-manager-generated lock files under repository policy.
- Advisory dispositions have specific evidence and affected knowledge claims are reconciled.

## Publication

Push and PR creation require explicit repository-specific approval.
After approval, continue the requested hosted gates, merge, cleanup and memory recording.

## Boundaries

Do not change application source, styles, assets, translations, public APIs, or deployment settings.
Do not invoke a live provider, deployment, or publication during local verification.
Keep TypeScript inside the installed parser peer range and pnpm within the existing CI major.
Offline secret scanning must retain decoded, unreadable, binary, and empty-raw findings; malformed input must fail without a partial clean result.

Literal locations prefer a positive integer filesystem line only when the literal starts on that line.
Invalid, missing, or wrong hints retain the established literal search and file-level fallbacks.
