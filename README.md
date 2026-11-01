# AI Atlas

An interactive AI PM learning hub with 12 expandable lessons across models, benchmarks, economics, companies, and pain points. Includes text-token cost modeling, per-task agent-loop costs, search, track filters, browser-local progress, and a 45-player landscape with detailed profiles and comparisons. Your recent questions and answers lead the homepage.

## Develop and verify

Node.js 22+: `npm ci --ignore-scripts`, `npm start` (port 3000), `npm test`, `npm run build`. The static public build is `dist/`. All relative asset paths support GitHub Pages project subpaths. No runtime dependencies, credentials, or backend needed.

`data/learning.json` contains editorial lessons, source records and calculator presets. The source snapshot was checked November 1, 2026 against official OpenAI, Claude, Gemini and SWE-bench pages. Prices are USD per million tokens, standard base text tiers. Gemini 4 Argon promotional prices expire November 30, 2026; presets are an explicitly dated snapshot, not live quotes. Tool calls, grounding, cache writes/storage, regional premiums, tax and infrastructure are excluded. Replace usage assumptions with billing data before budgeting.

Vendor facts, PM interpretation and pain-point hypotheses are distinguished in the lessons. There is no universal model ranking. `data/landscape.json` separates checked primary product references from editorial analysis. Only narrowly sourced relationships are enabled by default; other historical research leads remain unverified. Public market caps are pending and private valuations are dated seed references. Do not interpret it as a current comparable company ranking.

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

All pages share a static header and breadcrumb generated from `scripts/navigation.js`. A direct Your questions destination leads four supporting groups: Learn (lessons, topics, skills, local/cloud, coding-agent comparison), Explore (industry map, cost lab), Practice (question bank, interviews, journal), Reference (sources, glossary). The logo returns to the overview.

Edit the navigation configuration, run `npm run nav`, and commit the updated HTML. `site-nav.css` and `site-nav.js` provide responsive disclosure menus with keyboard, Escape, and outside-click support. The links are present in HTML even without JavaScript. Existing URLs stay valid. Tests detect pages that drift from the shared navigation.

Design guidance in AGENTS.md adapts the GOV.UK Government Design Principles to this learning hub, with progressive disclosure and a WCAG 2.2 AA target. It defines how agents should place new content, reuse patterns, and validate findability as the site grows.

`coding-agents.html` compares Claude Code and Codex through public architecture references, a six-step workflow, expandable explanations, and a task-based comparison rubric. The question bank also records model-fit and plan-budget questions; budget remains unresolved until actual plan/usage data is available.

## Product purpose and curriculum

AI Atlas is a question-led workspace for a product manager transitioning into AI PM. The core jobs are capture, understand, choose, evaluate, price/operate, map the industry and demonstrate readiness. AGENTS.md contains the high-level brief, proactive-question provenance rules and design guidance.

`data/curriculum.json` contains eight topic guides and sixteen checked external resources (including blogs, video, podcast and documentation). `data/glossary.json` contains PM-focused definitions; `data/practice.json` contains illustrative interview scenarios. `npm run content:generate` renders six pages from these sources and `scripts/build-guides.js`; then run `npm run nav`. Keep generated HTML committed so content is readable without JavaScript. Interactive enhancements are in `guides.js` and pure helpers in `learning-tools.js`.

The browser-local learning inbox supports capture, edit, delete/undo and JSON export; it does not call an AI model or publish notes. Skills mark artifacts drafted, not mastery. Interview responses are personal drafts, not automatically scored. All these browser stores can be unavailable; exports offer a backup. Historical journal, story prompts and infographic notes remain archived with disclosures.

Proactive questions use `provenance: "ai-suggested"` and `answerAuthor: "ai"`. The bank supports origin and relevance filters, interest ratings, correctness verdicts, notes and export. Relevance and correctness are independent; no AI suggestion begins approved. More questions can be added when the owner supplies inbox exports or asks them in a chat.

## Question-first homepage and expanded landscape

The homepage prioritises the owner's latest questions and brief/full answers before learning content. `askedSequence` records known conversation order without inventing timestamps. Run `npm run home:generate` after changing owner questions; generated-home tests catch drift. `questions.html` defaults to the owner's questions, latest first; `?origin=ai-suggested` opens suggestions separately. Evaluation controls remain optional.

The landscape contains 45 curated player profiles, including product brands and corporate groups. `profile` separates dated primary product references from editorial buyer/commercial/strategy fields. Search covers roles, products and buyers; the directory sorts by player name, and two profiles can be compared. Deep links use `industry.html#player-ID`. Only primary-source-reviewed relationships are enabled by default; unverified historical leads are opt-in and dashed. Old valuation seed records remain optional history, not the directory's ranking.

The current user priority and near-term outcomes are recorded in AGENTS.md. SITE_AUDIT.md records observed product gaps and a prioritised learning-focused backlog; no telemetry or user metrics are inferred.
