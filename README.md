# BountyFit

BountyFit is a small, local-first opportunity triage app built for Devpost's **Build With AI: Basics** hackathon.

Paste a bounty or hackathon listing and BountyFit returns an evidence-backed **GO**, **REVIEW**, or **SKIP** decision based on a strict async, code-submit, no-interview profile. Missing facts stay explicitly unknown instead of being guessed.

## Run

```bash
node server.js
```

Open http://127.0.0.1:4173.

Public demo: https://bountyfit-demo-2026.vercel.app

Official demo video: https://youtu.be/urzuOI22VMw

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
- a judge-facing evidence count that separates verified signals from unresolved facts

The analyzer is deterministic and runs entirely in the browser. No API key, account, or backend is required.

## Devpost planning artifacts

The public planning artifacts live in `devpost/`: `scope.md`, `prd.md`, `spec.md`, `checklist.md`, and the generated `app-map.html`.

`devpost/learner-profile.md` is intentionally excluded from Git because it contains personal learning context.

## License

MIT. See `LICENSE`.
