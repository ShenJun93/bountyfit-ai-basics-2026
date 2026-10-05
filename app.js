import {analyzeListing} from './src/analyzer.js';

const input = document.querySelector('#listingInput');
const analyzeButton = document.querySelector('#analyzeButton');
const resetButton = document.querySelector('#resetButton');
const emptyResult = document.querySelector('#emptyResult');
const analysisResult = document.querySelector('#analysisResult');
const verdict = document.querySelector('#verdict');
const scoreValue = document.querySelector('#scoreValue');
const scoreBar = document.querySelector('#scoreBar');
const decisionSummary = document.querySelector('#decisionSummary');
const evidenceList = document.querySelector('#evidenceList');
const adjustmentList = document.querySelector('#adjustmentList');
const reasonList = document.querySelector('#reasonList');
const unknownList = document.querySelector('#unknownList');
const checklist = document.querySelector('#checklist');
const copyButton = document.querySelector('#copyButton');

const samples = {
  go: `Build With AI: Basics. $1,250 cash first prize. Deadline: October 26, 2026 at 5:00 PM EDT. Build a new app and submit a public GitHub repository plus a 1–3 minute demo video. No interview required. Judging is asynchronous after submission.`,
  review: `$250 Help Wanted bounty. Post a proposal with your root cause analysis and wait for assignment. You must be hired through Upwork before creating a pull request. GitHub implementation required after selection. Payment follows accepted and deployed work.`,
  uncertain: `$500 developer opportunity to improve a command-line tool. Prize details and deadline will be announced later. Submission instructions are not yet published. Remote collaboration.`,
  skip: `$500 developer challenge. Deadline: October 12. Submit an initial repository. Shortlisted developers must complete a live technical interview on Zoom and a final live demo call before the winner is selected.`
};

function renderList(target, items, fallback) {
  target.innerHTML = '';
  const values = items.length ? items : [fallback];
  for (const item of values) {
    const li = document.createElement('li');
    li.textContent = item;
    target.append(li);
  }
}

function renderEvidence(items) {
  evidenceList.innerHTML = '';
  if (!items.length) {
    evidenceList.innerHTML = '<span class="evidence empty-chip">No strong evidence extracted</span>';
    return;
  }
  for (const item of items) {
    const node = document.createElement('div');
    node.className = 'evidence';
    const label = document.createElement('span');
    label.textContent = item.label;
    const value = document.createElement('strong');
    value.textContent = item.value;
    node.append(label, value);
    evidenceList.append(node);
  }
}

function renderAdjustments(items) {
  adjustmentList.innerHTML = '';
  for (const item of items) {
    const node = document.createElement('div');
    node.className = 'adjustment';
    const delta = document.createElement('strong');
    delta.className = item.delta >= 0 ? 'positive' : 'negative';
    delta.textContent = item.delta >= 0 ? `+${item.delta}` : String(item.delta);
    const label = document.createElement('span');
    label.textContent = item.label;
    node.append(delta, label);
    adjustmentList.append(node);
  }
}

function render(result) {
  emptyResult.classList.add('hidden');
  analysisResult.classList.remove('hidden');

  verdict.textContent = result.verdict;
  verdict.dataset.kind = result.verdict.toLowerCase();
  scoreValue.textContent = result.score;
  scoreBar.style.width = `${result.score}%`;
  scoreBar.dataset.kind = result.verdict.toLowerCase();
  decisionSummary.textContent = `${result.evidence.length} verified signal${result.evidence.length===1?'':'s'} · ${result.unknowns.length} unresolved fact${result.unknowns.length===1?'':'s'}`;
  decisionSummary.dataset.kind = result.unknowns.length ? 'uncertain' : 'complete';

  renderEvidence(result.evidence);
  renderAdjustments(result.adjustments);
  renderList(reasonList, result.reasons, 'No strong positive or negative signal detected.');
  renderList(unknownList, result.unknowns, 'No material unknowns detected.');

  checklist.innerHTML = '';
  for (const item of result.checklist) {
    const li = document.createElement('li');
    li.textContent = item;
    checklist.append(li);
  }
}

function analyze() {
  const result = analyzeListing(input.value);
  render(result);
}

input.addEventListener('input', () => {
  analyzeButton.disabled = !input.value.trim();
});

analyzeButton.addEventListener('click', analyze);

resetButton.addEventListener('click', () => {
  input.value = '';
  analyzeButton.disabled = true;
  analysisResult.classList.add('hidden');
  emptyResult.classList.remove('hidden');
  input.focus();
});

for (const button of document.querySelectorAll('[data-sample]')) {
  button.addEventListener('click', () => {
    input.value = samples[button.dataset.sample];
    analyzeButton.disabled = false;
    analyze();
  });
}

copyButton.addEventListener('click', async () => {
  const items = [...checklist.querySelectorAll('li')].map((li, index) => `${index + 1}. ${li.textContent}`).join('\n');
  try {
    await navigator.clipboard.writeText(items);
    copyButton.textContent = 'Copied';
  } catch {
    copyButton.textContent = 'Select manually';
  }
  window.setTimeout(() => {
    copyButton.textContent = 'Copy';
  }, 1400);
});
