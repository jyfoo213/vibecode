# AI Atlas — instructions for coding agents

Read this file and README.md before changing the repository. User instructions take precedence. This is a static, public AI PM learning hub at https://jyfoo213.github.io/vibecode/.

## Why this site exists

The owner is a product manager transitioning into AI product management. AI Atlas is their evolving question-led learning workspace: capture a confusing AI question, answer it clearly, make it visual or interactive when useful, connect it to a topic, and revisit whether the answer is sound. Build for practical product judgment, not a generic AI news site, a polished demo alone, or an assumed ML-research background.

The core jobs to be done are:
1. **Capture a question without losing it.** Provide a low-friction inbox, topic placement, and a next step. Browser-local drafts are not automatically shared with agents or published.
2. **Understand the mechanics.** Explain models, training vs inference, tokens, embeddings, context, attention and generation at PM depth, with optional technical depth.
3. **Choose an intervention.** Distinguish prompts, retrieval, data quality, fine-tuning, model selection and harness/tool fixes. Diagnose the failure before proposing a new model.
4. **Own product quality.** Build rubrics, representative evals, human review, failure taxonomies, release criteria and regression checks.
5. **Manage economics and operations.** Explain pricing, billed tokens, caching, latency, routing, retries, observability and cost per successful task. Separate subscription limits, API spend and hosting.
6. **Understand the industry.** Map companies, infrastructure, model platforms, applications, customer pain points, distribution and business models using dated evidence.
7. **Demonstrate AI PM readiness.** Convert learning into inspectable artifacts, portfolio decisions and honest interview stories; never invent the owner's experience or results.

Continue building thin or missing sections autonomously within the requested scope. Prefer a connected learning path with depth on useful decisions over isolated pages. Use plain language, concise takeaways, diagrams, worked examples, meaningful interactions and progressive disclosure. Link to relevant blogs, documentation, courses, podcasts or YouTube when the external explanation adds depth; explain why the resource is useful, verify its identity, and distinguish vendor claims or older teaching material from current product facts. Do not imply that a video was watched or a podcast listened to when only its page was checked.

Be proactive about learning gaps: propose useful follow-up questions and draft answers, explicitly labeled **AI suggested · AI answered**. Keep them separate from the owner's actual questions and original excerpts. Let the owner rate **interest/relevance** separately from **answer correctness**; neither is an automatic endorsement. Store generated question provenance, evidence, stable IDs and revisions in the question dataset. Do not auto-pass your own work or fabricate user questions. Build requested new lessons from relevant captured questions; local inbox exports must be explicitly supplied to an agent before it can use those notes.

## Current UX priority — owner feedback, November 1, 2026

The owner is in the **knowledge-gathering phase**. Their P1 is returning to **their own recent questions and the answers**, not grading answers or completing exercises. They currently trust the draft quality enough to focus on learning. Keep source caveats and optional eval tools, but do not make correctness scoring, portfolio projects or interview practice the default journey.

Near-term outcomes are practical AI PM judgment for current work and understanding the AI industry/landscape. Put recent owner questions/answers first on the homepage and a direct “Your questions” link in global navigation. Keep AI suggestions clearly separate; sort owner questions using explicit conversation order rather than invented timestamps. The map should explain players, products, buyers, commercial lenses and strategic implications, with company groups/product brands and editorial analysis clearly disclosed. Source relationships independently; do not draw unverified leads as established facts.

## Start with the current state

- Inspect `git status`, branch, recent commits, and the files relevant to the task. Preserve uncommitted work from other agents. Do not reset, clean, or overwrite someone else's changes.
- Use a focused feature branch and pull request for website changes. Test before merging. When the user has authorized publication, merge and verify the resulting GitHub Pages workflow; do not add an extra conversational approval gate.
- If several agents work concurrently, agree on file ownership and use separate branches/worktrees where possible. Share a short handoff with changed files, checks, known limits, and commit/PR. Do not assume another agent's workspace is idle.

## Architecture and commands

- Buildless HTML/CSS and browser ES modules; Node.js 22+ for tooling. No framework, backend, runtime dependencies, API keys, or database needed.
- `npm ci --ignore-scripts`; `npm start` (port 3000); `npm test`; `npm run build`.
- `scripts/build-home.js` / `npm run home:generate` render recent owner Q&A from `data/questions.json` before other homepage content. `recent-questions.js` owns owner-only ordering; `home.js` shows optional browser-local review status. Keep short and full answers in the same question record.
- `index.html`, `hub.css`, `hub.js`, `cost.js`: learning hub and calculator. `data/learning.json`: lessons, presets, sources.
- Shared navigation: edit `scripts/navigation.js`, run `npm run nav`, and commit generated HTML for all pages. `site-nav.css` / `site-nav.js` own the common header. Keep global links consistent and use breadcrumbs for page context.
- `scripts/build-guides.js` and `data/curriculum.json`, `data/glossary.json`, `data/practice.json` generate Topics, Skills, Sources, Glossary, Interview and Inbox pages. Edit data/templates, run `npm run content:generate`, then `npm run nav`; do not lose generated-page edits. `guides.*` / `learning-tools.js` implement the demos and browser-local work. Historical notes live in `data/legacy-notes.json` and remain clearly archival.
- `coding-agents.html`: sourced Claude Code/Codex architecture comparison and prompt-to-implementation walkthrough.
- `coding-models.*`: local vs cloud development topic. `questions.*`, `question-state.js`, `data/questions.json`: question bank and manual answer evaluation.
- `industry.html`, `industry.css`, `app.js`, `landscape-utils.js`, `data/landscape.json`: curated player map, product-focused directory, detailed profiles and two-player comparison. Checked product references do not establish financial values, legal independence or performance rankings. Preserve historical record disclosures and the separate relationship-evidence toggle.
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

## Question completion and archive

Done/Archive are independent of correctness verdicts. `question-lifecycle.js` defines active/done/archived states in the existing browser-local question record. Done and archived questions leave the active bank and homepage, but remain in Done & archived, direct links and exports. Restore and Undo must preserve notes, interest ratings and verdict revisions. Do not infer “Pass” from “Done.”

The current release uses localStorage, not a provisioned server database. Explain that it is device/browser-specific. A future shared database needs an authenticated backend, per-user authorisation and explicit service configuration; GitHub Pages cannot host that backend. Do not put server secrets or private user states into the public repository. The owner explicitly chose browser-local storage with no sign-in for now. Do not add a shared backend unless they request a change.

## Architecture learning content — do not confuse a lesson with implementation

The owner explicitly requested architecture questions and diagrams for knowledge only. `architecture.html` explains the current site; architecture case records in `data/questions.json` include inline diagrams rendered by `answer-diagrams.js`. Future mobile/desktop apps and cloud database/auth/sync components are hypothetical lesson content. Do not provision or build those systems from these learning questions. The separately authorised browser-local Done/archive UI remains the chosen implementation.

## Validate and publish

- Run `npm test` and `npm run build`. Add meaningful checks for changed behavior; avoid tests that simply restate static copy.
- For interactive changes, check the browser: normal and empty/error states, keyboard controls, persistence, and desktop/mobile layouts. Recheck the existing calculator/map when changes affect them. Report unavailable checks honestly.
- `.github/workflows/static.yml` tests/builds on main, uploads only `dist/`, and deploys GitHub Pages. Confirm the workflow's terminal result and the public URL before claiming deployment succeeded.
- Keep README.md and HOSTING.md accurate. Use `work/` for ignored scratch artifacts. Finish with the user-facing URL, relevant PR, checks, and any real limitations.
