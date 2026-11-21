# Rizokastron wall

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rizokastron-wall-q110834541` |
| Coordinates | 37.97292, 23.72634 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.97292/23.72634)) |
| Wikidata | [Q110834541](https://www.wikidata.org/wiki/Q110834541) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Athens Municipality |
| Inception | 1230 |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, marker 24, zone 52, building 838, road 457, wall 182, cliff 30, waterway 2, retaining-wall 10).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 4, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12352553 historic=citywalls 129 m from ledger point
- pruned to the outline plus 150 m: 1596 -> 905 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 398 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 314 mapped (trace size budget); minor lanes are not drawn
- origin moved 128 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.97292/23.72634) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q110834541 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/rizokastron-wall-q110834541.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
