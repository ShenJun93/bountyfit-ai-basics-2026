# Devpost Edit Preview — BountyFit — 2026-10-05

**LOCAL PREVIEW ONLY — DO NOT SAVE TO DEVPOST WITHOUT EXPLICIT APPROVAL**

## Eligibility-critical field

**Try it out link must be the public repository URL:**

https://github.com/ShenJun93/bountyfit-ai-basics-2026

GitHub currently opens the optimized branch `work/bountyfit-prize-polish-v1` by default. A fresh clone from the canonical repo URL checks out the optimized candidate and passes **8/8 tests**.

Do not replace the required repo link with a Vercel preview URL.

## Suggested short description

BountyFit is an evidence-first opportunity triage app for solo builders. Paste a bounty or hackathon listing and it returns an explainable GO, REVIEW, or SKIP decision, showing exactly which facts affected the score and which important facts are still unknown. It runs locally, needs no API key, and never invents a deadline or submission rule that the listing did not state.

## Suggested judge-facing story

The product is intentionally not generic AI summarization. BountyFit is deterministic and evidence-constrained:

- verified facts affect the score;
- missing facts remain unknown;
- every bonus and penalty is inspectable;
- live-interview and pre-hire gates are explicit;
- the next-action checklist is generated from the same evidence state.

The strongest demonstration is the **missing-facts → REVIEW** flow: BountyFit refuses false certainty instead of inventing a deadline or submission path.

## Judge criteria mapping

### Design
One-screen workflow with strong verdict hierarchy, evidence/unknown separation, and four labeled sample flows.

### Potential Impact
Helps solo builders avoid wasting hours on opportunities that later reveal missing submission details, unclear rewards, pre-hire gates, or mandatory interviews.

### Innovation / Idea
Evidence-constrained deterministic triage rather than opaque summarization.

### Presentation
Use the contrast sequence:
1. complete evidence → GO;
2. missing facts → REVIEW;
3. live interview → SKIP.

## Media

Preferred replacement demo: `devpost/DEMO-V2.md`.

Preferred screenshots:
1. GO;
2. **missing-facts REVIEW** — strongest single image;
3. SKIP/live gate.

The existing stable demo/video asset can remain until a replacement video is reviewed and published.

## Deployment truth

- Optimized feature branch is public.
- Canonical GitHub repo URL opens that optimized branch.
- Preview-only interactive candidate passed all four judge-facing flows.
- Vercel remains configured with `productionBranch=main`.
- Production was **not** promoted as part of making the optimized GitHub repo visible.

## Final save checklist

- [ ] Try it out = https://github.com/ShenJun93/bountyfit-ai-basics-2026
- [ ] Required planning docs still public: `scope.md`, `prd.md`, `spec.md`.
- [ ] Short description uses evidence-first positioning.
- [ ] Missing-facts REVIEW is emphasized.
- [ ] New screenshots added only after capture review.
- [ ] New video URL used only after publication + playback verification.
- [ ] Preview every link.
- [ ] Explicit approval before final Devpost save.
