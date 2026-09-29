---
doc: prd
status: approved
---

# BountyFit — Product Requirements

BountyFit is a one-screen opportunity triage tool for a solo developer who wants async coding work without interviews.
Source: `scope.md > Who It's For`, `scope.md > The Core Loop`.

## The Core Journey
1. The user opens BountyFit and sees a short explanation plus a large listing input.
2. They paste the text of a bounty/hackathon listing or load one of the built-in examples.
3. They click **Analyze opportunity**.
4. BountyFit extracts visible signals: reward, deadline, interview/live-call language, code/repo/demo requirements, assignment/hire gates, and payout wording.
5. The app calculates a score and returns **GO**, **REVIEW**, or **SKIP**.
6. The result explains the decision with positive signals, blockers, unknowns, and a short action checklist.
7. The user can copy the checklist or reset and analyze another listing.

## Screens and Layout
Single responsive page:
- Header with product name and one-line purpose.
- Left/main input card with textarea, sample buttons, and Analyze action.
- Right/result area with verdict, score, extracted signals, reasons, and checklist.
- On narrow screens, input stacks above result.

## Look and Feel
Dark operator dashboard with strong contrast, large verdict typography, compact evidence chips, and restrained motion. Avoid generic chatbot bubbles and excessive gradients.

## Features and Behavior

### Listing input
- Accept plain text.
- Disable Analyze for empty/whitespace-only input.
- Provide three example listings that demonstrate GO, REVIEW, and SKIP cases.

### Signal extraction
- Detect common money formats such as $500, $25,000, USDC, and prize-pool wording.
- Detect deadline/date language when present and preserve the matched evidence text.
- Detect live/interview gates using terms such as interview, Zoom, live assessment, call, sales call, meeting required.
- Detect async submission signals such as submit, GitHub repo, pull request, demo video, Devpost, public repository.
- Detect assignment/hire gates such as must be hired, wait for assignment, Upwork hiring.
- Detect payout/award signals such as cash, bounty, prize, payout, USDC.

### Verdict
- **GO**: strong code-submit signals, no live gate, and no mandatory pre-hire gate.
- **REVIEW**: promising opportunity but one or more important facts are unknown or a pre-hire/assignment gate exists.
- **SKIP**: a mandatory interview/live gate is detected, or explicit unpaid/no-prize language dominates.
- Score must be explainable; every deduction/bonus shown to the user.

### Action checklist
Generate 3–6 next actions from the extracted state, such as verify deadline, confirm eligibility, prepare repo/demo, or avoid the opportunity because of a live gate.

## States and Boundaries
- **Empty** — guidance and examples visible; no fake result.
- **Analyzed** — verdict and evidence are visible.
- **Insufficient evidence** — REVIEW with explicit unknowns rather than inventing facts.
- No listing text is sent over the network or persisted after reload.

## Product Decisions
- Deterministic and explainable instead of using a remote LLM — keeps the PoC private, free, and easy for judges to run.
- One screen instead of a multi-step wizard — supports rapid repeated triage.
- Strict live-gate penalty — matches the learner's actual bounty-hunting constraint.

## What We're Building
A complete browser experience that accepts listing text and returns an evidence-backed verdict and next-action checklist.

## Deferred From the POC
- URL ingestion and live web verification.
- Saved opportunity history and comparisons.
- Custom user profiles.
- LLM/MCP/Alexa+ integrations.

## Possible Later Enhancements
Expose the analyzer as an MCP tool, add a browser fetcher, and let the user save multiple profiles for different work strategies.

## Non-Goals
- Guaranteeing payout or predicting contest winners.
- Automatically applying to opportunities.
- Scraping private/logged-in sites.
- Replacing human verification of legal eligibility and official rules.

## Open Questions
None block the PoC. Later MCP/Alexa integration can be designed after this submission is complete.
