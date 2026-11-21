# Tughlaqabad

> India · Delhi · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tughlaqabad` |
| Coordinates | 28.514614, 77.259971 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.514614/77.259971)) |
| Wikidata | [Q2511605](https://www.wikidata.org/wiki/Q2511605) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Badarpur tehsil |
| Inception | 1321 |
| Designations | Monument of National Importance |
| Wikipedia language editions | 18 |
| Programme catalogue | confidence high, significance rank 207; sources catalogue:tughlaqabad;wikidata:Q2511605;wikidata:Q41651807;smith-newton:r87 |
| OSM `historic` | castle |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, marker 2, road 163, wall 11, building 551, zone 3, waterway 2, water 1).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102684251 historic=castle Q2511605 134 m from ledger point
- pruned to the outline plus 40 m: 734 -> 49 elements
- origin moved 132 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.514614/77.259971) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/tughlaqabad-pass.md](../../../research/tughlaqabad-pass.md)

## Ledger note

src/levels/tughlaqabad.trace.js (curation tools/trace/curation/tughlaqabad.mjs), level src/levels/tughlaqabad-t1.js, registered in alpha-x0.js. Outline is OSM way 102684251 (castle, Q2511605; the default match was the palace ruins way, 215 m away). Missing for T2: An ASI plan with the citadel, Vijay Mandal, palace area, gates and the causeway to the tomb; wall heights. Research: docs/research/tughlaqabad-pass.md. Batch-0 run 2026-11-15; written history not researched. Batch 0 (2026-11-11): alphabetical sweep F-V chosen by user; do first. coords from wikidata (was 28.513,77.262)

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
