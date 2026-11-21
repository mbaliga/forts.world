# Red Fort

> India · Chandni Chowk tehsil · evidence: **T2 (partial)** · status: `plan-traced`

## Identity

| Field | Value |
|---|---|
| Site id | `red-fort-q45957` |
| Coordinates | 28.655833, 77.240278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.655833/77.240278)) |
| Wikidata | [Q45957](https://www.wikidata.org/wiki/Q45957) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Chandni Chowk tehsil |
| Inception | 1648 |
| Designations | Monument of National Importance\|World Heritage Site |
| UNESCO WHC id | 231rev |
| Wikipedia language editions | 76 |
| Programme catalogue | confidence high, significance rank 20; sources wikidata:Q45957;unesco:231 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, marker 4, road 402, building 210, waterway 3, zone 9, wall 16).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 21, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/264863907 historic=castle Q45957 145 m from ledger point
- pruned to the outline plus 30 m: 645 -> 202 elements
- origin moved 143 m from the ledger point to the outline centroid
- 16 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.655833/77.240278) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/red-fort-pass.md](../../../research/red-fort-pass.md)

## Ledger note

type=fort; confidence=high; rank=20; sources=2 Alpha-I batch (2026-11-14): 10 forts spread across A-Z starting at I, distinct from batch 0 and every other alpha batch. Research pass 1 done: docs/research/red-fort-pass.md. \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 289 elements); data/traces/red-fort-q45957.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-16: same work as ledger row red-fort: src/levels/red-fort-q45957.trace.js (curation tools/trace/curation/red-fort-q45957.mjs), level src/levels/red-fort.js; old generated scene kept as red-fort-hand.js. Trace window widened to +-800 m (bu

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
