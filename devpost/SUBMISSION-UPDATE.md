# BountyFit — Prize Polish Submission Update

Local draft only. This does not modify the current Devpost submission.

## Positioning

**Evidence-first opportunity triage for solo builders.**

BountyFit turns pasted bounty/hackathon text into an explainable GO, REVIEW, or SKIP decision, but its main differentiator is what it refuses to do: if a deadline, submission path, reward, or interview requirement is not actually evidenced by the listing, the fact stays **unknown** instead of being invented.

That makes the product useful to a real audience: solo developers and vibe-coders deciding where to spend limited build time.

## Judge-facing story

### Design
- one-screen decision workflow;
- strong verdict typography;
- evidence and unknowns separated visually;
- local-first privacy;
- sample flows for GO, REVIEW/pre-hire, REVIEW/missing facts, and SKIP/live gate.

### Potential impact
The cost of a bad opportunity choice is wasted build time. BountyFit helps independent builders avoid spending hours on a listing that later reveals a mandatory interview, pre-hire gate, unclear reward, or missing submission path.

### Innovation / idea
The novelty is not generic AI summarization. The app is deliberately deterministic and **evidence-constrained**:
- verified facts affect the score;
- missing facts stay unknown;
- every bonus/penalty is inspectable;
- the checklist is generated from the same evidence state.

### Presentation
Lead with the contrast:
1. a complete async listing becomes GO;
2. a vague listing becomes REVIEW because facts are missing;
3. a live-interview listing becomes SKIP.

The second flow is the differentiator: show that BountyFit refuses false certainty.

## Suggested Devpost short description

BountyFit is an evidence-first opportunity triage app for solo builders. Paste a bounty or hackathon listing and it returns an explainable GO, REVIEW, or SKIP decision, showing exactly which facts affected the score and which important facts are still unknown. It runs locally, needs no API key, and never invents a deadline or submission rule that the listing did not state.

## Eligibility / submission audit

- Public repository: https://github.com/ShenJun93/bountyfit-ai-basics-2026
- Required planning docs: `devpost/scope.md`, `devpost/prd.md`, `devpost/spec.md`
- Public demo: https://bountyfit-demo-2026.vercel.app
- Live audit on 2026-10-05: that URL currently serves a **video player page only** (`BountyFit`, 77.7 seconds), not the interactive analyzer. A real interactive deployment is therefore a presentation improvement, but it must remain separate from the required Devpost Try it out repo link.
- Current YouTube demo: https://youtu.be/urzuOI22VMw
- Devpost submission id: 1204322
- Official update on 2026-10-04/05 reminds entrants that the **public repo URL must be present in the Try it out link field**. Verify this in the edit form before the deadline.

## Local verification — 2026-10-05

- Node regression: **8/8 PASS**.
- `app.js` syntax check: PASS.
- `git diff --check`: PASS.
- BrowserPort visual smoke:
  - GO sample → **GO**, 4 verified signals, 0 unresolved facts;
  - missing-facts sample → **REVIEW**, 1 verified signal, 3 unresolved facts;
  - live-gate sample → **SKIP**, 4 verified signals, 0 unresolved facts.
- Local smoke server and WAG headless browser were stopped after verification; no background process remains.

## External update gates

Current official deadline shown by Devpost: **October 26, 2026 at 5:00 PM EDT**.

- [x] Publish polished feature branch `work/bountyfit-prize-polish-v1`; remote tip before this docs-only update: `c8788583503e34f693740369a850b778a2593838`.
- [x] Deploy and smoke-test a preview-only interactive candidate; GO / REVIEW-pre-hire / REVIEW-missing-facts / SKIP all PASS.
- [ ] Verify public repo appears in Devpost **Try it out** link field.
- [ ] Promote an interactive build to a stable public URL only with explicit approval.
- [ ] Capture three judge-ready screenshots from the polished candidate.
- [ ] Record/re-cut demo using `devpost/DEMO-V2.md`.
- [ ] Edit existing Devpost submission only with explicit approval.
- [ ] Re-check final video/repo links before saving.
