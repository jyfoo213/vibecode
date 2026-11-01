# AI Atlas product audit

Date: November 1, 2026. This is a repository and browser audit, informed by the owner's explicit feedback—not an analytics study or a representative user-research result.

## Product direction confirmed by the owner

The owner is gathering knowledge while transitioning from PM to AI PM. Their P1 is finding their own recent questions and reading the answers. They currently trust the draft quality enough that evaluation is secondary. Application exercises, interviews and portfolio projects are not the immediate goal. Near-term outcomes are practical AI PM judgment and understanding the industry/landscape.

The primary journey should be: **return → find my question → read the answer → follow a related explanation or player → capture the next question**.

## Changes completed in this release

- Homepage begins with six recent owner questions, a brief answer and expandable full answer. All eleven owner questions are one click away. Order uses known conversation sequence, not invented timestamps.
- “Your questions” is a direct global navigation destination. The bank defaults to owner questions, latest first; eight AI suggestions remain separately labeled and filterable.
- Correctness review and exercises remain available but are no longer the leading task. Optional verdicts still persist; interest ratings remain independent.
- Industry coverage expands from 25 seed companies to 45 player profiles. Product scope, offerings, buyer and commercial lenses, strategic implications, trade-offs, related players and source notes make the map explanatory rather than just a logo collection.
- The directory prioritises roles, products and buyers. Two-player comparison and player deep links support exploration. Historical valuations no longer drive ranking or directory order.
- Primary-source-reviewed relationship records are on by default. Unverified research leads require opt-in and use dashed edges. Product brands/groups and editorial analysis are disclosed.

## What works and should be preserved

| Observed strength | Why it supports the current job |
| --- | --- |
| Concise answers with expandable depth | The reader can understand the gist without committing to a course. |
| Owner questions separated from AI suggestions | Suggested topics do not displace the owner's interests. |
| Shared navigation and source-linked guides | New material has a consistent home and a route to more depth. |
| Meaningful player profiles and comparison | Industry exploration can become understanding rather than memorisation. |
| Static, dependency-light publishing | Updating content does not require running a model backend or introducing per-reader inference spend. |

## Prioritised next changes

| Priority | Gap and evidence | Product recommendation | How to learn whether it helps |
| --- | --- | --- | --- |
| P1 | Search is page-specific; owner questions have no topic filter. This is visible in the current controls. | Add a question-first search/index with topic tags, related questions and links into guides/players. Avoid another global category. | Ask the owner to find a remembered answer from a different page; observe first choice and wrong turns. |
| P1 | Recency uses sequence in one conversation. There are no capture timestamps for older cases. | Record real capture dates and originating topic for future questions. Preserve unknown historical dates as unknown. Group older questions by topic as the bank grows. | Check whether the owner uses chronology or topic recall to find an answer. |
| P1 | Inbox notes, verdicts and interest ratings are browser-local. Exports exist, but there is no cross-device sync. | Keep the limitation visible. If device switching becomes painful, design an access-controlled capture/sync workflow before adding a backend. Do not publish private notes by default. | Ask whether the owner reads on a phone and asks questions on another device; observe a real handoff. |
| P2 | Forty-five profiles provide breadth, but a newcomer still has to decide where to start. | Add a few optional guided industry trails: model lab vs inference provider, enterprise knowledge stack, and coding-tool ecosystem. Use actual owner questions to choose the first trail. | Can the owner explain the difference between two layers after one short trail? |
| P2 | Source checks are dated snapshots, and two profiles rely on primary-source search excerpts. Company positioning and products can change quickly. | Add evidence coverage and stale-review indicators, then recheck the references most relevant to current questions. Pursue full-page sources for partial coverage. | Track unresolved source gaps and whether a stale claim affected a question the owner actually read. |
| P2 | Some concepts appear in short lessons, long guides and the question dataset. Data is versioned, but answer content can drift across views. | Share canonical answer blocks or explicit cross-links/revisions where repetition becomes a maintenance burden. Preserve concise and detailed views. | Change a concept once and inspect every linked answer for consistency. |
| P3 | Interview rubrics and artifact checklists are useful later, but not central to current knowledge gathering. | Keep them secondary. Do not add gamification, mandatory grading or more practice screens until the owner's goal shifts. | Revisit only when the owner asks to apply knowledge or prepare for interviews. |

## Validation and limits

Automated checks cover owner-only recency, stale-review handling, player search, evidence filtering, peer integrity, generated-page consistency, routes, content provenance and existing learning/cost behavior. Browser checks cover owner-first homepage and bank, answer expansion, optional verdict carryover, separate AI suggestions, all 45 map/directory entries, representative profiles, buyer search and empty results, native profile dialogs, comparison/duplicate rejection, opt-in historical leads, focused layer views, deep links, Escape, mobile/320px reflow and calculator/lesson regression checks.

There is no usage telemetry, observed retention measure, conversion study, full accessibility audit or independent vendor-performance validation. Company scope is not a legal-entity or investment assessment. Relationships are partial coverage; no edge means unresearched, not disconnected. The site does not automatically answer an inbox note or sync it into the repository.

## Feedback to ask after actual use

1. When you look for an old answer, do you remember the wording, the topic, or when you asked it?
2. Which player or layer made the industry map more understandable—and which still feels abstract?
3. Do you need the same question history on multiple devices?

These questions should guide the next iteration; they are not blockers for this release.
