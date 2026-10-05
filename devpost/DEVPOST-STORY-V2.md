# BountyFit — Devpost Story V2

> LOCAL PREVIEW ONLY. Do not save to Devpost without explicit approval.

## Short description

BountyFit is evidence-first opportunity triage for solo builders. Paste a bounty or hackathon listing and it returns an explainable **GO**, **REVIEW**, or **SKIP** decision while keeping missing facts explicitly unknown.

## Inspiration

Solo builders can lose hours on opportunities that look attractive at first but later reveal a missing deadline, unclear submission path, mandatory interview, or pre-hire gate.

The problem is not a lack of summaries. The problem is false certainty.

I wanted a small tool that answers one practical question:

> Is this opportunity actually worth spending build time on?

And I wanted every answer to be inspectable.

## What it does

BountyFit analyzes the text of a bounty, hackathon, or paid developer opportunity directly in the browser.

It extracts evidence such as:

- reward amount;
- deadline;
- code/repository/demo submission path;
- explicit async/no-interview language;
- live-interview or live-demo gates;
- pre-hire or assignment requirements;
- payout language.

Then it returns one of three verdicts:

### GO

The listing contains enough positive evidence to justify spending build time.

### REVIEW

Important facts are missing or unresolved.

This is the key behavior: BountyFit does **not** invent a deadline, submission path, or interview rule just to produce a confident-looking result.

### SKIP

The listing contains a hard execution blocker for the selected builder profile, such as a mandatory live technical interview.

Every score adjustment, extracted signal, unknown, and next-action item remains visible.

## How we built it

BountyFit is intentionally small and deterministic.

- HTML/CSS/JavaScript frontend.
- Local-first analysis: listing text stays in the browser.
- No API key.
- No external model call required.
- Evidence and unknowns are rendered separately.
- The same structured evidence state drives the score, verdict, reasons, and next-action checklist.

The project was built with the **Devpost Learn Skill Pack**.

The public repository includes the required planning artifacts generated through that workflow:

- `devpost/scope.md`
- `devpost/prd.md`
- `devpost/spec.md`

The optimized candidate currently passes **8/8 automated tests**.

## Challenges we ran into

### Avoiding fabricated certainty

The easiest implementation would have been to infer missing details from vague wording. That would make the output look smarter while making it less trustworthy.

The analyzer therefore treats unpublished deadlines, unclear submission instructions, and unstated interview requirements as unknowns.

### Separating “pre-hire” from “no interview”

A listing that says “no interview required” should not be penalized just because it contains the word “interview”.

Likewise, a pre-hire assignment gate is not the same as an ordinary code submission.

The tests explicitly cover these distinctions.

### Making the decision inspectable

A single numeric score was not enough. Judges and users need to see why the tool reached the verdict.

The final UI therefore exposes:

- extracted evidence;
- score breakdown;
- reasons;
- unknowns;
- next-action checklist.

## Accomplishments that we're proud of

- Complete end-to-end triage in one screen.
- Deterministic, explainable GO/REVIEW/SKIP decisions.
- Missing facts remain visibly unknown.
- Four judge-facing sample flows:
  - GO · complete evidence
  - REVIEW · pre-hire gate
  - REVIEW · facts missing
  - SKIP · live gate
- **8/8** automated tests passing.
- Public repository with planning docs, MIT license, and local run instructions.
- Canonical GitHub repo URL opens the optimized branch by default without promoting the Vercel production branch.

## What we learned

The most useful AI-adjacent product behavior is sometimes knowing when **not** to infer.

For opportunity triage, uncertainty is actionable information.

A REVIEW verdict that says “deadline unknown” is more useful than a confident recommendation built on invented facts.

## What's next for BountyFit

- optional URL ingestion while preserving quoted evidence;
- configurable builder profiles;
- saved opportunity history;
- comparison mode across multiple listings;
- exportable evidence receipts for later review.

## Judge-facing demo sequence

The clearest 70–85 second story is:

1. complete evidence → **GO**;
2. missing facts → **REVIEW**;
3. live interview → **SKIP**.

The middle flow is the main differentiator because it demonstrates that BountyFit refuses false certainty.
