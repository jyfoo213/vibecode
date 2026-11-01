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
- Shared navigation: edit `scripts/navigation.js`, run `npm run nav`, and commit generated HTML for all pages. `site-nav.css` / `site-nav.js` own the common header. Keep global links consistent and use breadcrumbs for page context.
- `coding-models.*`: local vs cloud development topic. `questions.*`, `question-state.js`, `data/questions.json`: question bank and manual answer evaluation.
- Existing notes and `industry.html` / `app.js` / `data/landscape.json` remain supported. Preserve their research-preview disclosures.
- `scripts/build.js` defines public assets and writes `dist/`; `server.js` previews the same allowlist. Restart the server after adding public files.
- Relative links must work under the `/vibecode/` GitHub Pages subpath. Keep secrets, scratch work, tests, and agent instructions out of `dist/`.

## Content and design

- Keep lessons concise, with optional details, exercises, and primary-source links. Preserve the paper/green visual system, responsive layouts, keyboard support, visible focus, meaningful labels, and reduced-motion behavior.
- Check time-sensitive claims against primary sources. Record the check date, price units and tier, expiration dates, and exclusions. Do not label a dated snapshot live or imply a universal model ranking.
- Distinguish sourced facts, PM analysis, hypotheses, and unverified historical data. Do not silently replace old evidence or claim a link was checked without checking it.
- Separate development workspace, source repository, production hosting, and model inference. Sleeping, restarting, rebuilding, and deleting an environment are different events.

## Design framework for a growing learning hub

Use the **GOV.UK Government Design Principles**, adapted to AI Atlas: start from user needs, reuse working solutions, simplify complexity, iterate with evidence, and make the experience accessible. This is a design approach, not a requirement to copy GOV.UK branding or install its component library. Use **progressive disclosure** for optional depth and **WCAG 2.2 AA** as the accessibility target. Do not claim conformance without an appropriate audit.

Sources checked November 1, 2026:
- [GOV.UK Government Design Principles](https://www.gov.uk/guidance/government-design-principles)
- [Nielsen Norman Group: Progressive Disclosure](https://www.nngroup.com/articles/progressive-disclosure/)
- [W3C: WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/)

### Start from the reader's task

Before a meaningful feature or navigation change, state the reader's job and the observable outcome. Examples: understand a model trade-off, estimate monthly cost, find a primary reference, or judge whether an answer meets a rubric. These are product hypotheses until observed with users; do not invent research findings. Prefer the smallest change that improves that job.

### Scale the information architecture before the menu

- Give each page one canonical home: **Learn** (lessons, topics, skills, guides), **Explore** (industry and interactive tools), **Practice** (question evals, interview prep, journal), or **Reference** (sources, glossary). Cross-link related content without duplicating pages.
- Add new topics within an existing collection first. Add a standalone page when it supports a distinct reader task or needs enough depth to benefit from its own URL. Do not add a top-level menu item for each new feature.
- If a collection becomes hard to scan, improve its index, grouping, search or filters before adding another global category. Change the four-group structure only when repeated task/findability evidence shows that it no longer fits; it is a starting hypothesis, not an immutable taxonomy.
- Use reader-facing labels, a visible page title, a breadcrumb, an active destination, and a relevant next step. Keep existing URLs stable; provide a migration path if moving content. Update the shared navigation configuration, not individual page menus.

### Layer the content and reuse the patterns

- Default learning pattern: **question or objective → short takeaway → optional explanation/example → source and date → exercise or next step**. Show the essential answer first; expandable sections hold additional depth.
- Keep qualifications needed to interpret the answer visible. Never hide price units, expired assumptions, critical uncertainty, calculator errors, or the meaning of a review verdict behind a disclosure.
- Use a diagram for relationships or flows, a table for comparisons, and an interactive control only when changing it teaches something or helps a real decision. Do not add decoration that competes with reading.
- Reuse navigation, cards, disclosure behavior, form states, typography, spacing and color roles before introducing variants. Keep shared navigation styles in `site-nav.css`; consolidate repeated content patterns when they recur. Preserve the existing paper/green identity while improving older pages incrementally.
- Keep content/evidence in structured data when it serves several views. Add stable IDs, categories and review metadata as the collection grows. More pages alone do not justify a framework migration, backend, or new dependency.

### Validate the task, not only the screenshot

- For relevant changes, walk through: find a lesson; reach the cost lab and interpret its estimate; locate evidence; review a question and retain feedback. Start from an unrelated page to test navigation, not a direct link alone.
- Check narrow/mobile layouts, keyboard order and activation, visible focus, Escape/closing behavior, meaningful headings and labels, contrast, zoom/reflow, and empty/error/loading states. Prefer native HTML controls. Never rely only on hover or color.
- Treat time-to-find, first navigation choice, wrong turns, task completion and user feedback as useful evaluation signals. Use small observed sessions or voluntary feedback before adding telemetry; do not invent metrics, install tracking, or treat an agent walkthrough as user research.
- In a substantial design PR, briefly record the reader task, placement, reused pattern, and validation result. These are review notes, not a new approval gate. Iterate when evidence shows confusion; preserve working patterns when it does not.

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
