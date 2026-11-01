# AI Atlas

An interactive AI PM learning hub with 12 expandable lessons across models, benchmarks, economics, companies, and pain points. Includes text-token cost modeling, per-task agent-loop costs, search, track filters, browser-local progress, and the existing 25-company landscape and notes.

## Develop and verify

Node.js 22+: `npm ci --ignore-scripts`, `npm start` (port 3000), `npm test`, `npm run build`. The static public build is `dist/`. All relative asset paths support GitHub Pages project subpaths. No runtime dependencies, credentials, or backend needed.

`data/learning.json` contains editorial lessons, source records and calculator presets. The source snapshot was checked November 1, 2026 against official OpenAI, Claude, Gemini and SWE-bench pages. Prices are USD per million tokens, standard base text tiers. Gemini 4 Argon promotional prices expire November 30, 2026; presets are an explicitly dated snapshot, not live quotes. Tool calls, grounding, cache writes/storage, regional premiums, tax and infrastructure are excluded. Replace usage assumptions with billing data before budgeting.

Vendor facts, PM interpretation and pain-point hypotheses are distinguished in the lessons. There is no universal model ranking. The older `data/landscape.json` remains a research-preview dataset: relationships are unverified, public market caps are pending, and private valuations are dated seed references. Do not interpret it as a current comparable company ranking.

## Deployment

Pushes to `main` run tests and build, then deploy only `dist/` through `.github/workflows/static.yml` to GitHub Pages. See HOSTING.md.

Progress is stored only in this browser using localStorage; if unavailable, it lasts for the session. No account or analytics. External Google Fonts are optional; system and Georgia fallbacks work without them.
