# Royal Castle in Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `royal-castle-in-warsaw-q756098` |
| Coordinates | 52.24778, 21.01417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24778/21.01417)) |
| Wikidata | [Q756098](https://www.wikidata.org/wiki/Q756098) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|architectural heritage monument\|royal palace |
| Administrative area | Warsaw |
| Inception | 1598 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland\|provincial register of monuments |
| Wikipedia language editions | 43 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, marker 72, road 754, waterway 1, zone 118, building 150, wall 72, cliff 1, retaining-wall 59, water 1).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 47, inferred 0, unknown 42.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/64436 historic=castle Q756098 45 m from ledger point
- pruned to the outline plus 80 m: 1229 -> 490 elements
- roads capped: kept the 80 longest of 309 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid
- 53 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24778/21.01417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|architectural heritage monument\|royal palace; sitelinks=43; wikidata:Q756098 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/royal-castle-in-warsaw-q756098.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
