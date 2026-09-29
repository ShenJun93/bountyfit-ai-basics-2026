import test from 'node:test';
import assert from 'node:assert/strict';
import {analyzeListing} from '../src/analyzer.js';

test('GO for async code submission with explicit no-interview wording', () => {
  const result = analyzeListing(`
    $1,250 cash prize. Deadline: October 26, 2026.
    Build a new app, submit a public GitHub repository and a 1-3 minute demo video.
    No interview required. Judging is asynchronous after submission.
  `);
  assert.equal(result.verdict, 'GO');
  assert.equal(result.signals.liveGate, false);
  assert.equal(result.signals.asyncSubmission, true);
  assert.ok(result.score >= 72);
  assert.ok(result.adjustments.some((item) => item.delta === 18 && /async/i.test(item.label)));
});

test('SKIP for mandatory interview/live gate', () => {
  const result = analyzeListing(`
    $500 bounty. Submit your GitHub repo first.
    Shortlisted developers must complete a live technical interview on Zoom.
    Deadline: October 10.
  `);
  assert.equal(result.verdict, 'SKIP');
  assert.equal(result.signals.liveGate, true);
  assert.ok(result.score < 72);
});

test('REVIEW for pre-hire gate even when code work is described', () => {
  const result = analyzeListing(`
    $250 reward. Post a proposal and wait for assignment.
    You must be hired on Upwork before opening a pull request.
    GitHub implementation required.
  `);
  assert.equal(result.verdict, 'REVIEW');
  assert.equal(result.signals.preHireGate, true);
});

test('does not misclassify explicit no interview as a live gate', () => {
  const result = analyzeListing('No interview. No calls required. Submit a repository for a $500 bounty.');
  assert.equal(result.signals.liveGate, false);
  assert.equal(result.signals.explicitNoLiveGate, true);
});

test('vague listing produces REVIEW with unknowns', () => {
  const result = analyzeListing('Help us build something useful for developers. More details soon.');
  assert.equal(result.verdict, 'REVIEW');
  assert.ok(result.unknowns.length >= 2);
});

test('does not treat unpublished deadline or submit details as confirmed evidence', () => {
  const result = analyzeListing('Prize details and deadline will be announced later. Submit details are not yet published.');
  assert.equal(result.verdict, 'REVIEW');
  assert.equal(result.deadline, null);
  assert.equal(result.signals.asyncSubmission, false);
  assert.ok(result.unknowns.some((item) => /deadline/i.test(item)));
  assert.ok(result.unknowns.some((item) => /submission/i.test(item)));
});

test('submit artifact does not imply a deadline without a date signal', () => {
  const result = analyzeListing('Submit a public GitHub repository for a $500 bounty. No interview required.');
  assert.equal(result.signals.asyncSubmission, true);
  assert.equal(result.deadline, null);
});
