# AI Atlas

An interactive AI PM learning hub with 12 expandable lessons across models, benchmarks, economics, companies, and pain points. Includes text-token cost modeling, per-task agent-loop costs, search, track filters, browser-local progress, and the existing 25-company landscape and notes.

## Develop and verify

Node.js 22+: `npm ci --ignore-scripts`, `npm start` (port 3000), `npm test`, `npm run build`. The static public build is `dist/`. All relative asset paths support GitHub Pages project subpaths. No runtime dependencies, credentials, or backend needed.

`data/learning.json` contains editorial lessons, source records and calculator presets. The source snapshot was checked November 1, 2026 against official OpenAI, Claude, Gemini and SWE-bench pages. Prices are USD per million tokens, standard base text tiers. Gemini 4 Argon promotional prices expire November 30, 2026; presets are an explicitly dated snapshot, not live quotes. Tool calls, grounding, cache writes/storage, regional premiums, tax and infrastructure are excluded. Replace usage assumptions with billing data before budgeting.

Vendor facts, PM interpretation and pain-point hypotheses are distinguished in the lessons. There is no universal model ranking. The older `data/landscape.json` remains a research-preview dataset: relationships are unverified, public market caps are pending, and private valuations are dated seed references. Do not interpret it as a current comparable company ranking.

## Deployment

Pushes to `main` run tests and build, then deploy only `dist/` through `.github/workflows/static.yml` to GitHub Pages. See HOSTING.md.

Progress is stored only in this browser using localStorage; if unavailable, it lasts for the session. No account or analytics. External Google Fonts are optional; system and Georgia fallbacks work without them.

## Local vs cloud coding topic

`coding-models.html` explains workspaces, repository review, and production as separate layers. Includes responsive architecture diagrams and cold / warm / resume scenarios. GitHub lifecycle and prebuild references were checked November 1, 2026; Codespaces is an illustrative provider, not an identification of this session’s service. This topic is linked from Topics and the homepage.

## Agents and question evals

Read [AGENTS.md](./AGENTS.md) before working in this repository. It documents architecture, evidence standards, safe collaboration, validation, and the PR/deployment workflow. Tools that do not discover AGENTS.md automatically should be explicitly pointed to it.

`questions.html` is the human-reviewed question bank, linked from the hub and Topics. `data/questions.json` preserves stable IDs, revisions, labeled paraphrases, original user excerpts, proposed answers, acceptance criteria, evidence, and answer links. Update case revisions when substantive answers or criteria change. Reviews default to Not reviewed; agents must not mark their own answers correct.

Verdicts and notes live in browser localStorage, with session-only fallback and JSON export. They do not sync to the repo or other devices. A changed case revision invalidates an old verdict while preserving its notes; exports include the earlier review. Only add conversation content intended for the public site. Root agent instructions are excluded from the static build.

## Navigation

All pages share a static header and breadcrumb generated from `scripts/navigation.js`. Four groups organize content by intent: Learn (lessons, topics, skills, local/cloud, coding-agent comparison), Explore (industry map, cost lab), Practice (question bank, interviews, journal), Reference (sources, glossary). The logo returns to the overview.

Edit the navigation configuration, run `npm run nav`, and commit the updated HTML. `site-nav.css` and `site-nav.js` provide responsive disclosure menus with keyboard, Escape, and outside-click support. The links are present in HTML even without JavaScript. Existing URLs stay valid. Tests detect pages that drift from the shared navigation.

Design guidance in AGENTS.md adapts the GOV.UK Government Design Principles to this learning hub, with progressive disclosure and a WCAG 2.2 AA target. It defines how agents should place new content, reuse patterns, and validate findability as the site grows.

`coding-agents.html` compares Claude Code and Codex through public architecture references, a six-step workflow, expandable explanations, and a task-based comparison rubric. The question bank also records model-fit and plan-budget questions; budget remains unresolved until actual plan/usage data is available.

## Product purpose and curriculum

AI Atlas is a question-led workspace for a product manager transitioning into AI PM. The core jobs are capture, understand, choose, evaluate, price/operate, map the industry and demonstrate readiness. AGENTS.md contains the high-level brief, proactive-question provenance rules and design guidance.

`data/curriculum.json` contains eight topic guides and sixteen checked external resources (including blogs, video, podcast and documentation). `data/glossary.json` contains PM-focused definitions; `data/practice.json` contains illustrative interview scenarios. `npm run content:generate` renders six pages from these sources and `scripts/build-guides.js`; then run `npm run nav`. Keep generated HTML committed so content is readable without JavaScript. Interactive enhancements are in `guides.js` and pure helpers in `learning-tools.js`.

The browser-local learning inbox supports capture, edit, delete/undo and JSON export; it does not call an AI model or publish notes. Skills mark artifacts drafted, not mastery. Interview responses are personal drafts, not automatically scored. All these browser stores can be unavailable; exports offer a backup. Historical journal, story prompts and infographic notes remain archived with disclosures.

Proactive questions use `provenance: "ai-suggested"` and `answerAuthor: "ai"`. The bank supports origin and relevance filters, interest ratings, correctness verdicts, notes and export. Relevance and correctness are independent; no AI suggestion begins approved. More questions can be added when the owner supplies inbox exports or asks them in a chat.
