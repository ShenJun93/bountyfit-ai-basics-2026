# Judge Readiness — 2026-10-05

## Official scoring

Build With AI: Basics uses a Stage 1 pass/fail eligibility check, then equally weighted Stage 2 criteria:
1. Design
2. Potential Impact
3. Innovation / Idea
4. Presentation

The official rules say judges may rely only on the text, images, and video. The current update also requires the public repository URL in the Devpost **Try it out link** field for prize eligibility.

## BountyFit current strengths

- Required skill-pack planning docs are public.
- Deterministic evidence-constrained triage.
- Missing facts remain unknown instead of being invented.
- Four judge-facing flows: GO, REVIEW/pre-hire, REVIEW/missing facts, SKIP/live gate.
- 8/8 regression tests.
- Public polished feature branch.
- GitHub default branch now points to `work/bountyfit-prize-polish-v1`, so the canonical repo URL opens the optimized candidate without moving `main`.
- Fresh clone from the canonical repo URL checks out the optimized default branch and passes **8/8 tests**.
- Preview-only interactive candidate passed all four flows.
- Vercel remains configured with `productionBranch=main`; production was not promoted.
- Public repo has MIT license and local run instructions.

## Highest-ROI remaining work

1. **Eligibility audit**
   - confirm Devpost “Try it out link” is the public repo URL.
2. **Demo V2**
   - lead with complete listing -> GO;
   - immediately contrast missing-facts -> REVIEW;
   - finish with live-interview -> SKIP;
   - explicitly say “BountyFit refuses false certainty”.
3. **Submission copy**
   - target user: solo builders / vibe-coders;
   - problem: wasted build time on bad opportunities;
   - value: evidence-backed decisions and explicit unknowns.
4. **Screenshots**
   - GO;
   - missing-facts REVIEW;
   - SKIP/live gate.

## Lower-priority / optional

A stable public interactive demo is helpful but not required for judging. The official requirements are the public repo plus a clear working demo video. Do not let deployment work displace the Try-it-out eligibility check or presentation quality.

## Stop conditions

Do not save Devpost edits, publish a replacement video, or promote the preview to a stable public URL without explicit approval.
