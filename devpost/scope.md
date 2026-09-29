---
doc: scope
status: approved
---

# BountyFit

A small browser app that turns a pasted bounty listing into an explainable pursue/review/skip decision and a submission checklist.

## The Unique Kernel
BountyFit does not merely summarize an opportunity. It evaluates the listing against a strict execution profile—especially "no interview/live gate" and "code → submit → wait"—and shows exactly which evidence drove the verdict.

## Who It's For
A solo developer using AI coding agents who scans many bounties and hackathons, wants near-term cashflow, and does not want interview-heavy or sales-style opportunities.

## The Core Loop
Paste a bounty or hackathon listing, click Analyze, review extracted facts and the verdict, then follow the generated action checklist. Repeat for the next opportunity.

## Inspiration & Identity
Fast, evidence-first, operator-style tooling: compact, legible, and decision-oriented rather than chatty. The result should feel like a triage dashboard.

## Why This Matters to the Learner
The learner is actively hunting paid coding opportunities and wants to spend build time only on opportunities that match their constraints.

## What "Working" Looks Like
A judge can paste a realistic listing containing reward, deadline, submission requirements, and interview language. BountyFit extracts those signals, labels the opportunity GO/REVIEW/SKIP, explains why, and produces a concrete next-action checklist.

## The POC Boundary
One local browser app; text paste input; deterministic extraction; explainable scoring; decision card; extracted-signal chips; action checklist; example listings; local-only state.

## Later
URL fetching, LLM extraction, personal profiles, saved history, MCP server, Alexa+ integration, automated deadline monitoring.

## Explicitly Cut
- Account/login: unrelated to proving the decision loop.
- Database/cloud backend: not needed for a local PoC.
- Paid AI API: avoids credentials and cost during judging.
- Automated web crawling: would expand scope and introduce reliability/legal issues.
- Applying/submitting on behalf of the user: outside the core decision-support experiment.
