---
doc: checklist
status: approved
---

# Build Checklist

Build mode: fast

## Slices

- [x] **1. Paste a listing and get an explainable verdict**
  Becomes usable: The page runs locally, accepts listing text, and returns GO/REVIEW/SKIP with score and reasons.
  Why now: This proves the unique kernel end to end.
  PRD ref: `prd.md > The Core Journey`, `prd.md > Verdict`
  Spec ref: `spec.md > Analyzer`, `spec.md > App controller`
  Build: Create the static UI, analyzer module, scoring rules, and result rendering.
  Verify (mechanical): PASS — Node test suite passed 5/5 and BrowserPort confirmed GO/REVIEW/SKIP sample behavior.
  Learner check: Pending learner hands-on review.
  Commit: `Build explainable bounty triage core`

- [x] **2. Make the result submission-demo ready**
  Becomes usable: Extracted evidence, numeric score breakdown, unknowns, checklist, copy/reset controls, responsive styling, and accessibility states are complete.
  Why now: Turns the kernel into a coherent product experience for judging.
  PRD ref: `prd.md > Signal extraction`, `prd.md > Action checklist`, `prd.md > Look and Feel`
  Spec ref: `spec.md > Result view`, `spec.md > Look and Feel`
  Build: Surface evidence and exact score adjustments, add action checklist and polished responsive presentation, and cover edge cases.
  Verify (mechanical): PASS — tests passed 5/5 after the score-breakdown refinement; BrowserPort showed the new breakdown in the GO flow.
  Learner check: Pending learner full demo review before recording.
  Commit: `Polish BountyFit demo experience`

## Hands-on Checkpoints
- [ ] Early usable behavior explored — mechanical browser verification complete; learner feedback still pending
- [ ] Final kick-the-tires exploration and feedback completed

## Final Review
- [ ] Final review complete — feedback resolved and learner confirms ready to ship

## Code Tour and App Map
- [ ] Learning activity complete — focused alternative using analyzer tests and one verified rule change
- [ ] Optional edit and transfer reflection addressed — not applicable until final review
- [x] `devpost/app-map.html` generated from finished code, checked, and includes a project-grounded practice to reuse

Activity and evidence: Mechanical evidence exists in `tests/analyzer.test.js`; the build refinement added explicit numeric score adjustments so the "explainable" claim is verifiable in the UI.
Route and stops: `index.html` → `app.js` → `src/analyzer.js#analyzeListing` → rendered result; regression cases in `tests/analyzer.test.js`.
Edit outcome: Kept — exact +/− score adjustments are now returned by the analyzer and rendered in the result.
Reflection: pending learner review
Activity mode: focused alternative

## Revisions
- Surfaced exact score adjustments in the result — browser review showed that the initial UI explained factors but did not expose the numeric bonus/penalty behind the score.
- Final automated kick-the-tires review found two false-positive evidence cases: `deadline will be announced later` was treated as a real deadline, and bare `submit` wording was treated as a code/repo/demo path. Tightened deadline/submission detection and added regression coverage. Verification after the fix: Node tests 7/7 PASS; BrowserPort GO/REVIEW/SKIP samples PASS; unpublished deadline/submission case now remains REVIEW with both facts unknown.
