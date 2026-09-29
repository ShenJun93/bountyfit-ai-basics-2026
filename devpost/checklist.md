---
doc: checklist
status: approved
---

# Build Checklist

Build mode: fast

## Slices

- [ ] **1. Paste a listing and get an explainable verdict**
  Becomes usable: The page runs locally, accepts listing text, and returns GO/REVIEW/SKIP with score and reasons.
  Why now: This proves the unique kernel end to end.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Verdict`
  Spec ref: `spec.md > Analyzer`, `spec.md > App controller`
  Build: Create the static UI, analyzer module, scoring rules, and result rendering.
  Verify (mechanical): Start the server; run analyzer tests; confirm GO/REVIEW/SKIP sample cases.
  Learner check: Load each sample and confirm the explanation matches the expected operational decision.
  Commit: `Build explainable bounty triage core`

- [ ] **2. Make the result submission-demo ready**
  Becomes usable: Extracted evidence, unknowns, checklist, copy action, responsive styling, and keyboard/accessibility states are complete.
  Why now: Turns the kernel into a coherent product experience for judging.
  PRD ref: `prd.md > Signal extraction`, `prd.md > Action checklist`, `prd.md > Look and Feel`
  Spec ref: `spec.md > Result view`, `spec.md > Look and Feel`
  Build: Add evidence chips, action checklist, copy/reset controls, polished responsive CSS, and edge-case messaging.
  Verify (mechanical): Run tests; exercise empty, vague, negated-interview, and live-gate cases in browser.
  Learner check: Run the full demo journey and confirm it is clear enough for a 1–3 minute recording.
  Commit: `Polish BountyFit demo experience`

## Hands-on Checkpoints
- [ ] Early usable behavior explored — after slice 1
- [ ] Final kick-the-tires exploration and feedback completed

## Final Review
- [ ] Final review complete — feedback resolved and learner confirms ready to ship

## Code Tour and App Map
- [ ] Learning activity complete — focused alternative using analyzer tests and one verified rule change
- [ ] Optional edit and transfer reflection addressed — not applicable until final review
- [ ] `devpost/app-map.html` generated from finished code, checked, and shown, including a project-grounded practice to reuse

Activity and evidence: pending
Route and stops: pending
Edit outcome: pending
Reflection: pending
Activity mode: focused alternative

## Revisions
