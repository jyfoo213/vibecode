# AI Atlas

A first interactive AI industry landscape for learning how companies connect. Includes 25 seed profiles, five supply-chain layers, search, hover descriptions, selectable relationship details, and a sortable company directory.

## Develop

Requires Node.js 22 or newer. No runtime packages, accounts, API keys, or database service are needed.

```sh
cd /workspace/vibecode
npm ci --ignore-scripts
npm start
```

The server uses port 3000 (override with `PORT`). Run `npm test` for dataset validation. Check the homepage and `/data/landscape.json` over HTTP after startup.

## Research and data

`data/landscape.json` is the editable, version-controlled first database. Companies and directed relationships are separate records with stable IDs; these can migrate to SQLite or PostgreSQL when editing and persistence need a backend.

**This is not a researched current top-25 ranking.** The company universe is curated, not exhaustive. Public market caps are null pending source access. Four private valuations are dated historical seed references, explicitly unverified; directory ranks apply only to these available figures. Company profiles and relationship links are research leads, not verified current claims. Source URLs have not been checked; some reference general product pages. Relationship dates are pending. No live feed is connected.

Public market caps and private funding valuations measure different things and refer to whole companies. Historical numbers across different dates should not be interpreted as a current comparable ranking. Primary layers simplify companies that span several businesses. An absent edge means unresearched, not no relationship.

Next research pass: verify sources and relationship dates; obtain a consistent dated public-market snapshot; update private round records; then rank a documented candidate universe. Investigate ownership changes before treating private companies as standalone peers. Add structured evidence records and review history before publishing research conclusions.

## Interface

Hover or keyboard-focus a company for its description. Select it for valuation records, reference links, and directed connections. Use search and layer filters to narrow the map, or switch to the directory. Escape closes company details. On small screens the map scrolls horizontally.

## Environment

Use the existing isolated checkout; no Git worktree is needed. Keep processes separate from installed files: restart `npm start` in new sessions. No deployment or GitHub push has been performed.
