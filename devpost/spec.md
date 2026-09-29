---
doc: spec
status: approved
---

# BountyFit — Technical Spec

## How This Works, In Plain Language
BountyFit runs entirely in the browser. A small analyzer scans the pasted text for reward, deadline, submission, interview, hiring, and payout clues. A scoring function converts those clues into a verdict and a list of reasons. The UI renders the same evidence so the decision is inspectable rather than mysterious.

## The Core Journey Through the System
The user pastes a listing → the page passes the text to `analyzeListing()` → extraction helpers return structured signals → `scoreOpportunity()` applies the strict no-interview profile → the UI renders verdict, score, evidence, and checklist.
PRD ref: `prd.md > The Core Journey`.

## Stack
- HTML5 + CSS3 + modern browser JavaScript modules.
- Node.js built-ins only for local static serving and tests.
- Node `--test` for analyzer tests.
No runtime dependencies and no API key.

## Where It Runs and How Someone Tries It
- Runtime: any modern desktop browser.
- Start: `node server.js`
- Open: `http://127.0.0.1:4173`
- Tests: `node --test`
- Demo: paste or load a sample, click Analyze, then show the verdict evidence and checklist.
A public GitHub repository and short demo video are required for final submission; deployment is optional.

### Submission sharing links
- Public repository: `https://github.com/ShenJun93/bountyfit-ai-basics-2026`
- Public demo page: `https://bountyfit-demo-2026.vercel.app`
- Direct demo MP4: `https://bountyfit-demo-2026.vercel.app/BountyFit-Devpost-Demo-v1.mp4`
- Official submission video: `https://youtu.be/urzuOI22VMw`
- Video verification: 77.74 seconds, 1920×1080, H.264 video + AAC audio; YouTube page resolves as `BountyFit Devpost Demo v1`.

## Look and Feel
Dark slate background, warm off-white text, crisp cards, high-information density without clutter, large verdict block, subtle transitions, and accessible focus states. Interface copy is terse and operational.

## Components

### Analyzer
Pure functions for text normalization, money/deadline extraction, gate detection, scoring, and checklist generation.
PRD ref: `prd.md > Signal extraction`, `prd.md > Verdict`.

### App controller
Reads textarea/sample actions, invokes analyzer, and renders results.
PRD ref: `prd.md > The Core Journey`.

### Result view
Shows verdict, score, evidence chips, reasons, unknowns, and checklist.
PRD ref: `prd.md > Verdict`, `prd.md > Action checklist`.

## Data Model
`AnalysisResult` is an in-memory object:
- `verdict`: GO | REVIEW | SKIP
- `score`: 0–100
- `reward`: matched reward text or null
- `deadline`: matched deadline evidence or null
- `signals`: booleans for interview/live gate, async submission, pre-hire gate, payout language, unpaid language
- `reasons[]`
- `unknowns[]`
- `checklist[]`
Nothing persists after reload.

## File Structure
```
bountyfit-ai-basics-2026/
├── index.html
├── styles.css
├── app.js
├── server.js
├── package.json
├── README.md
├── src/
│   └── analyzer.js
├── tests/
│   └── analyzer.test.js
└── devpost/
    ├── scope.md
    ├── prd.md
    ├── spec.md
    ├── checklist.md
    └── app-map.html
```

## External Services and Dependencies
None at runtime. No network call is required to analyze a listing.

## Important Failure Modes
- **Listing is vague** → return REVIEW and name missing reward/deadline/submission evidence.
- **Keyword appears in a negated phrase such as "no interview"** → detect the negation before treating interview wording as a blocker.
- **Date parsing is ambiguous** → show matched evidence instead of inventing a normalized deadline.

## What Was Simplified and Why
- **Rule-based extraction** instead of an LLM — keeps the demo deterministic and credential-free; an LLM/MCP layer is a later enhancement.
- **Text paste** instead of URL crawling — proves the decision loop without adding browser/network complexity.

## Decisions and Open Issues
The learner's established constraint is that mandatory interviews/live calls are a strong reject signal. Implementation must handle explicit negations such as "no interview required" correctly. No unresolved issue blocks the build.
