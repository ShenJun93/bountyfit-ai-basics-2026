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
  Learner check: Addressed at final review — learner chose to rely on the verified browser/test evidence rather than run a separate manual pass.
  Commit: `Build explainable bounty triage core`

- [x] **2. Make the result submission-demo ready**
  Becomes usable: Extracted evidence, numeric score breakdown, unknowns, checklist, copy/reset controls, responsive styling, and accessibility states are complete.
  Why now: Turns the kernel into a coherent product experience for judging.
  PRD ref: `prd.md > Signal extraction`, `prd.md > Action checklist`, `prd.md > Look and Feel`
  Spec ref: `spec.md > Result view`, `spec.md > Look and Feel`
  Build: Surface evidence and exact score adjustments, add action checklist and polished responsive presentation, and cover edge cases.
  Verify (mechanical): PASS — tests passed 5/5 after the score-breakdown refinement; BrowserPort showed the new breakdown in the GO flow.
  Learner check: Addressed at final review — learner explicitly accepted the current PoC based on the completed automated kick-the-tires review and requested no additional changes.
  Commit: `Polish BountyFit demo experience`

## Hands-on Checkpoints
- [x] Early usable behavior checkpoint addressed — learner chose not to perform a separate manual pass and accepted the verified browser/test evidence for this PoC.
- [x] Final kick-the-tires checkpoint addressed — automated browser review exercised GO/REVIEW/SKIP plus an uncertain-evidence case; learner explicitly approved the resulting PoC for shipping and requested no further changes.

## Final Review
- [x] Final review complete — feedback resolved; learner explicitly confirmed the current PoC is acceptable to ship based on the completed verification evidence.

## Code Tour and App Map
- [x] Learning activity complete — focused alternative used a real false-positive detection bug to trace `src/analyzer.js` → regression tests → BrowserPort verification.
- [x] Optional edit and transfer reflection addressed — learner preferred continued automation and did not request a separate reflection exercise.
- [x] `devpost/app-map.html` generated from finished code, checked, and includes a project-grounded practice to reuse.

Activity and evidence: The final review found two concrete false positives in deadline/submission detection. The analyzer rules were tightened, two regression tests were added, Node tests reached 7/7 PASS, and BrowserPort verified the corrected uncertain-evidence case plus all three GO/REVIEW/SKIP sample flows.
Route and stops: `index.html` → `app.js` → `src/analyzer.js#analyzeListing` → `tests/analyzer.test.js` → rendered browser result.
Edit outcome: Kept — uncertain deadline/submission language now remains unknown instead of receiving false positive evidence.
Reflection: Learner explicitly preferred the verified result and continued automation over a separate manual/reflection exercise.
Activity mode: focused alternative

## Revisions
- Surfaced exact score adjustments in the result — browser review showed that the initial UI explained factors but did not expose the numeric bonus/penalty behind the score.
- Final automated kick-the-tires review found two false-positive evidence cases: `deadline will be announced later` was treated as a real deadline, and bare `submit` wording was treated as a code/repo/demo path. Tightened deadline/submission detection and added regression coverage. Verification after the fix: Node tests 7/7 PASS; BrowserPort GO/REVIEW/SKIP samples PASS; unpublished deadline/submission case now remains REVIEW with both facts unknown.
- Review-process deviation recorded transparently: the learner chose to rely on agent-run browser/test evidence instead of performing a separate hands-on click-through. No manual learner interaction is claimed.
