# BountyFit — External Promotion Plan

Local-only plan. No public action is authorized by this document.

## Candidate

- Workspace: `E:\Projects\bountyfit-ai-basics-2026`
- Branch: `work/bountyfit-prize-polish-v1`
- Candidate commit: `8b04b90f4b32fdb4784ca852405309e733c62a67`
- Regression: **8/8 PASS**
- Core scoring behavior: unchanged except an added regression that locks the judge-facing missing-facts sample to REVIEW.
- Judge-facing polish: evidence-first hero, product-principle strip, explicit verified/unknown counts, four labeled sample flows, Demo V2 plan, screenshot plan.

## Current public state

- Public repo: `https://github.com/ShenJun93/bountyfit-ai-basics-2026`
- Current public demo URL: `https://bountyfit-demo-2026.vercel.app`
- Live audit on 2026-10-05: the demo URL serves a **video player page only** (BountyFit, 77.7 seconds), not the interactive analyzer.
- Current YouTube demo: `https://youtu.be/urzuOI22VMw`
- Devpost submission id: `1204322`

## Critical eligibility check

Devpost's official update says the **public repository URL must be in the “Try it out link” field** for prize eligibility.

Canonical repo URL to verify/use:
`https://github.com/ShenJun93/bountyfit-ai-basics-2026`

Do not replace that required Try it out repo link with the live demo URL. If Devpost allows additional links, add the interactive demo separately.

## Recommended promotion sequence

### Gate A — Public repo update — COMPLETE

Public feature branch `work/bountyfit-prize-polish-v1` is published. GitHub now uses that branch as the repository default, so the canonical repo URL opens the optimized candidate while Vercel remains pinned to `productionBranch=main`. Fresh-clone verification from the canonical repo URL passes **8/8 tests**.

1. Push the polished candidate commit/branch.
2. Verify public repo still exposes:
   - MIT license;
   - `devpost/scope.md`;
   - `devpost/prd.md`;
   - `devpost/spec.md`;
   - setup/run instructions.
3. Keep repository public through judging.

### Gate B — Interactive deployment — PREVIEW COMPLETE

A preview-only interactive deployment has been smoke-tested across all four judge-facing flows. Stable public promotion remains pending explicit approval.

1. Deploy the polished repo root as a static web app to a new preview URL first.
2. Smoke-test all four sample buttons:
   - GO complete evidence;
   - REVIEW pre-hire;
   - REVIEW missing facts;
   - SKIP live gate.
3. Verify no private paths/accounts/data appear.
4. Promote the preview to a stable public URL only after smoke passes.
5. Keep the existing 77.7s demo/video asset available until the new video is published.

### Gate C — Presentation assets

Requires explicit publication/upload approval.

1. Capture three screenshots from the deployed candidate:
   - GO;
   - missing-facts REVIEW;
   - live-gate SKIP.
2. Re-cut the 70–85s video using `devpost/DEMO-V2.md`.
3. Verify H.264/AAC, audio present, no unrelated tabs/notifications.
4. Publish new YouTube video only after review.

### Gate D — Devpost edit

Requires explicit Devpost-edit approval.

Before saving:
- confirm **Try it out = public repo URL**;
- add live interactive demo only as an additional link if supported;
- update short description to the evidence-first positioning;
- use screenshot 2 (missing facts → REVIEW) as the strongest single image if only one image is useful;
- replace video only after the new public YouTube URL is verified;
- keep required planning docs unchanged and public;
- preview the submission and re-check every link.

## Rollback rule

If any gate fails, leave the currently submitted project intact. Do not trade a valid submission for an unverified polish deployment.
