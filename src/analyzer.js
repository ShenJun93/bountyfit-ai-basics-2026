const MONEY_RE = /(?:\$|USD\s?|USDC\s?)(?:\s?)(\d{1,3}(?:[,.]\d{3})+|\d+(?:\.\d+)?)(?:\s?(?:USD|USDC))?/gi;
const DEADLINE_RE = /(?:deadline|due|submit(?: by)?|closes?|ends?)\s*[:\-]?\s*([^\n.]{3,80})/i;

const liveGatePatterns = [
  /\binterview\b/i,
  /\bzoom\b/i,
  /\blive\s+(?:coding|assessment|demo|review|call)\b/i,
  /\btechnical\s+assessment\b/i,
  /\bsales\s+call\b/i,
  /\bphone\s+screen\b/i,
  /\bmeeting\s+required\b/i
];

const noLiveGatePatterns = [
  /\bno\s+interview(?:s)?\b/i,
  /\bwithout\s+an?\s+interview\b/i,
  /\bno\s+call(?:s)?\s+required\b/i,
  /\bno\s+live\s+(?:call|assessment|interview)\b/i,
  /\basynchronous(?:ly)?\b/i,
  /\basync\s+(?:submission|review|workflow)\b/i
];

const asyncSubmissionPatterns = [
  /\bsubmit(?:ted|ting)?\b/i,
  /\bgithub\b/i,
  /\brepositor(?:y|ies)\b/i,
  /\bpull\s+request\b/i,
  /\bdevpost\b/i,
  /\bdemo\s+video\b/i,
  /\bpublic\s+repo(?:sitory)?\b/i,
  /\bcode\s+submission\b/i
];

const preHirePatterns = [
  /\bmust\s+be\s+hired\b/i,
  /\bwait\s+for\s+(?:assignment|approval)\b/i,
  /\bassigned\s+before\b/i,
  /\bupwork\s+(?:hire|hiring|contract)\b/i,
  /\bselected\s+contributor\b/i,
  /\bproposal\s+review\b/i
];

const payoutPatterns = [
  /\bcash\b/i,
  /\bprize\b/i,
  /\bbounty\b/i,
  /\bpayout\b/i,
  /\busdc\b/i,
  /\breward\b/i
];

const unpaidPatterns = [
  /\bunpaid\b/i,
  /\bvolunteer\b/i,
  /\bno\s+(?:cash\s+)?prize\b/i,
  /\bno\s+payment\b/i
];

function findEvidence(text, patterns) {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const index = match.index ?? 0;
      return text.slice(Math.max(0, index - 48), Math.min(text.length, index + match[0].length + 72)).replace(/\s+/g, ' ').trim();
    }
  }
  return null;
}

function extractMoney(text) {
  const matches = [...text.matchAll(MONEY_RE)];
  if (!matches.length) return null;
  const ranked = matches
    .map((match) => {
      const numeric = Number(match[1].replace(/,/g, ''));
      return {text: match[0].trim(), numeric: Number.isFinite(numeric) ? numeric : 0};
    })
    .sort((a, b) => b.numeric - a.numeric);
  return ranked[0];
}

function extractDeadline(text) {
  const match = text.match(DEADLINE_RE);
  return match ? match[1].trim() : null;
}

function hasNegatedLiveGate(text) {
  return noLiveGatePatterns.some((pattern) => pattern.test(text));
}

function hasLiveGate(text) {
  const negated = hasNegatedLiveGate(text);
  if (negated) {
    const scrubbed = text
      .replace(/no\s+interview(?:s)?/gi, '')
      .replace(/without\s+an?\s+interview/gi, '')
      .replace(/no\s+call(?:s)?\s+required/gi, '')
      .replace(/no\s+live\s+(?:call|assessment|interview)/gi, '');
    return liveGatePatterns.some((pattern) => pattern.test(scrubbed));
  }
  return liveGatePatterns.some((pattern) => pattern.test(text));
}

function buildChecklist({verdict, reward, deadline, signals}) {
  const items = [];
  if (!deadline) items.push('Verify the official deadline before spending build time.');
  if (!reward) items.push('Confirm the exact cash/reward amount and payout terms.');
  if (signals.preHireGate) items.push('Confirm whether coding may start only after assignment or hiring.');
  if (!signals.asyncSubmission) items.push('Confirm the exact submission artifact: repo, PR, demo, or form.');
  if (verdict === 'SKIP' && signals.liveGate) {
    items.push('Do not invest build time unless the mandatory live/interview gate is acceptable.');
  } else {
    items.push('Read the official rules and confirm eligibility for your country/account.');
    items.push('Create a submission checklist from the official requirements.');
    if (signals.asyncSubmission) items.push('Prepare the smallest working repo/demo that satisfies every required artifact.');
  }
  return [...new Set(items)].slice(0, 6);
}

export function analyzeListing(rawText) {
  const text = rawText.trim();
  if (!text) {
    return {
      verdict: 'REVIEW',
      score: 0,
      reward: null,
      deadline: null,
      signals: {},
      reasons: [],
      unknowns: ['No listing text provided.'],
      checklist: ['Paste a bounty or hackathon listing to analyze.'],
      evidence: []
    };
  }

  const reward = extractMoney(text);
  const deadline = extractDeadline(text);
  const signals = {
    liveGate: hasLiveGate(text),
    explicitNoLiveGate: hasNegatedLiveGate(text),
    asyncSubmission: asyncSubmissionPatterns.some((pattern) => pattern.test(text)),
    preHireGate: preHirePatterns.some((pattern) => pattern.test(text)),
    payout: payoutPatterns.some((pattern) => pattern.test(text)),
    unpaid: unpaidPatterns.some((pattern) => pattern.test(text))
  };

  let score = 50;
  const reasons = [];
  const unknowns = [];
  const evidence = [];

  if (signals.unpaid) {
    score -= 60;
    reasons.push('Explicit unpaid/no-prize language detected.');
    evidence.push({label: 'Unpaid signal', value: findEvidence(text, unpaidPatterns)});
  }

  if (signals.liveGate) {
    score -= 45;
    reasons.push('Mandatory interview/live-call language conflicts with the no-interview profile.');
    evidence.push({label: 'Live gate', value: findEvidence(text, liveGatePatterns)});
  } else if (signals.explicitNoLiveGate) {
    score += 18;
    reasons.push('The listing explicitly supports async/no-interview work.');
    evidence.push({label: 'Async signal', value: findEvidence(text, noLiveGatePatterns)});
  } else {
    unknowns.push('Interview/live-call requirement is not clearly stated.');
  }

  if (signals.asyncSubmission) {
    score += 18;
    reasons.push('Code/repo/demo submission language matches the preferred workflow.');
    evidence.push({label: 'Submission', value: findEvidence(text, asyncSubmissionPatterns)});
  } else {
    score -= 6;
    unknowns.push('No clear code/repo/demo submission path detected.');
  }

  if (signals.preHireGate) {
    score -= 16;
    reasons.push('A pre-hire or assignment gate adds selection risk before coding.');
    evidence.push({label: 'Pre-hire gate', value: findEvidence(text, preHirePatterns)});
  }

  if (reward) {
    score += reward.numeric >= 1000 ? 12 : reward.numeric >= 250 ? 8 : 3;
    reasons.push(`Cash/reward signal detected: ${reward.text}.`);
    evidence.push({label: 'Reward', value: reward.text});
  } else {
    score -= 8;
    unknowns.push('Exact reward amount was not detected.');
  }

  if (deadline) {
    score += 4;
    reasons.push('A deadline is stated, which makes execution planning possible.');
    evidence.push({label: 'Deadline', value: deadline});
  } else {
    unknowns.push('Deadline was not detected.');
  }

  if (signals.payout && !signals.unpaid) {
    score += 5;
  }

  score = Math.max(0, Math.min(100, Math.round(score)));

  let verdict = 'REVIEW';
  if (signals.unpaid || signals.liveGate) verdict = 'SKIP';
  else if (!signals.preHireGate && signals.asyncSubmission && score >= 72) verdict = 'GO';

  return {
    verdict,
    score,
    reward,
    deadline,
    signals,
    reasons,
    unknowns,
    checklist: buildChecklist({verdict, reward, deadline, signals}),
    evidence: evidence.filter((item) => item.value)
  };
}
