# BountyFit

BountyFit is a small, local-first opportunity triage app built for Devpost's **Build With AI: Basics** hackathon.

Paste a bounty or hackathon listing and BountyFit returns an explainable **GO**, **REVIEW**, or **SKIP** decision based on a strict async, code-submit, no-interview profile.

## Run

```bash
node server.js
```

Open http://127.0.0.1:4173.

## Test

```bash
node --test
```

## What it checks

- reward / cash language
- deadline evidence
- code, repo, PR, Devpost, or demo submission signals
- mandatory interview / live-call gates
- pre-hire / assignment gates
- explicit unpaid wording
- missing facts that should remain unknown

The analyzer is deterministic and runs entirely in the browser. No API key, account, or backend is required.

## Devpost planning artifacts

The public planning artifacts live in `devpost/`: `scope.md`, `prd.md`, `spec.md`, `checklist.md`, and the generated `app-map.html`.

`devpost/learner-profile.md` is intentionally excluded from Git because it contains personal learning context.
