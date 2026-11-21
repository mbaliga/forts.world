# Alba Iulia Fortress

> Romania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alba-iulia-fortress-q15629334` |
| Coordinates | 46.06715, 23.57426 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.06715/23.57426)) |
| Wikidata | [Q15629334](https://www.wikidata.org/wiki/Q15629334) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Alba County |
| Inception | 1715 |
| Designations | Historic Monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | castrum |
| OSM `ruins` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 300 elements (outline 1, marker 32, road 278, building 243, wall 53, zone 59, waterway 7, water 7).

Evidence: documented 0, mapped 300, inferred 0, derived 0; heights documented 22, inferred 0, unknown 116.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241917530 historic=castle Q774266 116 m from ledger point
- pruned to the outline plus 80 m: 680 -> 351 elements
- roads capped: kept the 80 longest of 132 mapped (trace size budget); minor lanes are not drawn
- origin moved 151 m from the ledger point to the outline centroid
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.06715/23.57426) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=8; wikidata:Q15629334 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/alba-iulia-fortress-q15629334.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/romania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
