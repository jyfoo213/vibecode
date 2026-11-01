# AI Atlas — instructions for coding agents

Read this file and README.md before changing the repository. User instructions take precedence. This is a static, public AI PM learning hub at https://jyfoo213.github.io/vibecode/.

## Start with the current state

- Inspect `git status`, branch, recent commits, and the files relevant to the task. Preserve uncommitted work from other agents. Do not reset, clean, or overwrite someone else's changes.
- Use a focused feature branch and pull request for website changes. Test before merging. When the user has authorized publication, merge and verify the resulting GitHub Pages workflow; do not add an extra conversational approval gate.
- If several agents work concurrently, agree on file ownership and use separate branches/worktrees where possible. Share a short handoff with changed files, checks, known limits, and commit/PR. Do not assume another agent's workspace is idle.

## Architecture and commands

- Buildless HTML/CSS and browser ES modules; Node.js 22+ for tooling. No framework, backend, runtime dependencies, API keys, or database needed.
- `npm ci --ignore-scripts`; `npm start` (port 3000); `npm test`; `npm run build`.
- `index.html`, `hub.css`, `hub.js`, `cost.js`: learning hub and calculator. `data/learning.json`: lessons, presets, sources.
- `coding-models.*`: local vs cloud development topic. `questions.*`, `question-state.js`, `data/questions.json`: question bank and manual answer evaluation.
- Existing notes and `industry.html` / `app.js` / `data/landscape.json` remain supported. Preserve their research-preview disclosures.
- `scripts/build.js` defines public assets and writes `dist/`; `server.js` previews the same allowlist. Restart the server after adding public files.
- Relative links must work under the `/vibecode/` GitHub Pages subpath. Keep secrets, scratch work, tests, and agent instructions out of `dist/`.

## Content and design

- Keep lessons concise, with optional details, exercises, and primary-source links. Preserve the paper/green visual system, responsive layouts, keyboard support, visible focus, meaningful labels, and reduced-motion behavior.
- Check time-sensitive claims against primary sources. Record the check date, price units and tier, expiration dates, and exclusions. Do not label a dated snapshot live or imply a universal model ranking.
- Distinguish sourced facts, PM analysis, hypotheses, and unverified historical data. Do not silently replace old evidence or claim a link was checked without checking it.
- Separate development workspace, source repository, production hosting, and model inference. Sleeping, restarting, rebuilding, and deleting an environment are different events.

## Question bank is a manual eval set

- Capture explicit user questions as cases in `data/questions.json` when asked to maintain the bank. Paraphrases must be labeled and paired with a faithful original excerpt and origin. Do not invent user questions.
- Each case needs a stable ID, question, proposed answer, acceptance criteria, evidence links, and an answer-location link. Proposed answers are candidates, not proof of correctness.
- Update related cases when answers change. Preserve IDs so existing browser reviews stay meaningful; increment the case revision to make old reviews visibly stale after substantive edits.
- Never automatically mark your own answer correct. The user records Pass / Needs work / Not reviewed and supporting notes. A pass is a human verdict, not an objective guarantee or automated benchmark score.
- Reviews are browser-local, with JSON export. They are not automatically shared, committed, or synced among agents. Public question data must contain only material intended for this public site; do not add secrets or unrelated personal conversations.

## Validate and publish

- Run `npm test` and `npm run build`. Add meaningful checks for changed behavior; avoid tests that simply restate static copy.
- For interactive changes, check the browser: normal and empty/error states, keyboard controls, persistence, and desktop/mobile layouts. Recheck the existing calculator/map when changes affect them. Report unavailable checks honestly.
- `.github/workflows/static.yml` tests/builds on main, uploads only `dist/`, and deploys GitHub Pages. Confirm the workflow's terminal result and the public URL before claiming deployment succeeded.
- Keep README.md and HOSTING.md accurate. Use `work/` for ignored scratch artifacts. Finish with the user-facing URL, relevant PR, checks, and any real limitations.
