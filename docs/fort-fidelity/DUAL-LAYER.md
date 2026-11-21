# Decision 2026-11-04: documented layer plus labelled schematic layer

Madhav's instruction (this session): complete the 455 sites with `confidence=high` in `data/sites.csv` (queue: `queue-high.csv`, ordered by significance). Each site is delivered as **T2 where a plan or photograph exists**, plus a **labelled schematic layer** so a visitor can see both a constructed version and the bare, academically accurate one.

## The two layers
| | Documented layer (default, "Evidence") | Schematic layer ("Constructed", toggle) |
|---|---|---|
| Content | Only elements with `src` osm/plan/photo/dem and sourced heights; gaps shown as kerb-high plan lines | Everything in the documented layer plus walls, bastions, gates, towers, buildings drawn from textual descriptions and typology |
| Heights | Sourced only | Assumed, carried as `h.src = 'inferred'` with a stated rule (e.g. "laterite curtain 5 m, thesis p. 366") |
| Look | Current renderer | Same renderer, visibly different tint/outline and a "Schematic" badge on every element and in the era card |
| Rule | Nothing invented | Every added element has `ev:'schematic'`, a `basis` text naming the description it comes from, and never claims a position it does not have |
| Position | Plan-registered | Plan-registered where available; otherwise placed at the mapped outline vertex or line it is described on, flagged "position approximate" |

Standing rules that still hold: no invented elevations on the documented layer; the schematic layer may assume heights but must label them; an enclosure with no plan-sourced gate stays sealed in the documented layer; every "today" view carries present-day roads, buildings and markers; traces stay in git; images used must be openly licensed or public domain, with licence and URL recorded in the source catalogue.

## Engineering still to build
1. Schema `in-rts.trace/1`: add `ev: 'schematic'` and `layer` handling; `check_sources` must accept it only with `basis` and an assumed `h`.
2. `t1.js`: render schematic elements with a distinct style; add a toggle (Evidence / Constructed) and a per-element badge.
3. Plan-raster tool (T2): register a downloaded plan to the OSM frame with 3+ control points, then trace elements with `plan:` src.
4. Per-site loop: fetch plan/photo candidates, register, trace, curate eras, write `docs/research/<id>-pass.md`, smoke and source check, screenshots of both layers, ledger.

## Blocker and prerequisites
The sandbox cannot download images until the network allowlist includes the hosts below (claude.ai Settings > Capabilities). Verified blocked on 2026-11-04: commons.wikimedia.org, upload.wikimedia.org, archive.org.
Hosts to allow: commons.wikimedia.org, upload.wikimedia.org, en.wikipedia.org, archive.org, ia800000-ia809999 style `*.us.archive.org`, run.unl.pt, institutodehistoriadaarte.com, research-repository.uwa.edu.au, whc.unesco.org, asi.nic.in, archnet.org, hpip.org, www.hmdb.org, independent-travellers.com, shodhganga.inflibnet.com, openstreetmap.org, overpass-api.de.

## Honest scale
455 sites is a multi-session programme, not one. Plan-registered T2 needs a readable plan per site; many will have none and stay T1 (documented) with a schematic layer. The ledger, not chat memory, is the handoff; `queue-high.csv` is the order.

## Implemented 2026-11-04 (first site: Gwalior)
- Trace field `constructed[]` (schema `in-rts.trace/1`, validated in `tools/trace/schema.mjs`). Each entry: `ev:'schematic'`; `src` (`inferred` or the plan/photo it stands on); `basis` (at least 20 characters, naming the description or plan it rests on); a name containing "schematic"; for wall, bastion, tower and building an assumed height `h:{v, src:'inferred', note}` whose note gives the rule; optional `eras[]`; `replaces[]` (documented element ids not drawn in the built era, e.g. a kerb-high footprint that the raised mass stands on); `stands_for` (documented wall id that gates attach to when the wall itself is replaced).
- Rendering: each era `X` of a site with a constructed layer gets a sibling era `X~built` ("Day ✦", label "· constructed"), drawn by `src/levels/t1.js` with documented elements plus the schematic ones, tinted with the palette accent colour. The documented era `X` never shows a schematic element. Campaign mode only matches era ids of three or four digits, so it ignores `~built`.
- Smoke test iterates every era in the level definition, so the `~built` eras are checked for reachability like any other.
- Large urban forts: `data/traces/build-options.json` can set `maxHalf`, `stride` and `pruneNearM` (keep only what is inside the outline or within that many metres of it; drops waterways).
