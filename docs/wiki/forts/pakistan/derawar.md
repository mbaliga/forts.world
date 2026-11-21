# Derawar

> Pakistan · Punjab (Cholistan) · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `derawar` |
| Coordinates | 28.766, 71.334 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.766/71.334)) |
| Wikidata | [Q2474542](https://www.wikidata.org/wiki/Q2474542) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Yazman Tehsil |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 25 |
| Programme catalogue | confidence high, significance rank 234; sources catalogue:derawar;wikidata:Q2474542;osm:r21780524;smith-newton:r32 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, wall 13, road 10, water 1, building 11).

Evidence: documented 0, mapped 36, inferred 0, derived 0; heights documented 8, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21780524 historic=fort Q2474542 231 m from ledger point
- origin moved 230 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.766/71.334) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/derawar-pass.md](../../../research/derawar-pass.md)

## Ledger note

src/levels/derawar.trace.js (curation tools/trace/curation/derawar.mjs), level src/levels/derawar-t1.js, registered in alpha-x0.js. Outline is OSM relation 21780524 (historic=fort, Q2474542, about 223 x 205 m). Missing for T2: A survey plan for the bastions, the gate, the mosque and the Nawab palace, and wall heights. Research: docs/research/derawar-pass.md. Batch-0 run 2026-11-15; written history not researched. Research pass 1 done: docs/research/derawar-pass.md. Blocked on geometry (run fetch-geometry for derawar) and a plan/survey; 30 m wall and bastion heights unverified. Alpha-I batch (2026-11-14): 10 forts spread across A-Z starting at I, distinct from batch 0 and every other alpha batch.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
