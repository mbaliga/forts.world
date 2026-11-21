# Tyszkiewicz Palace

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tyszkiewicz-palace-q2463480` |
| Coordinates | 52.24055, 21.01676 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24055/21.01676)) |
| Wikidata | [Q2463480](https://www.wikidata.org/wiki/Q2463480) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|university building |
| Administrative area | Warsaw |
| Inception | 1785 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland\|provincial register of monuments |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 25, road 359, building 78, zone 105, retaining-wall 23, wall 25, cliff 1).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 45, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/24881939 historic=castle Q2463480 3 m from ledger point
- pruned to the outline plus 150 m: 617 -> 393 elements
- roads capped: kept the 80 longest of 216 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24055/21.01676) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|university building; sitelinks=8; wikidata:Q2463480 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/tyszkiewicz-palace-q2463480.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
