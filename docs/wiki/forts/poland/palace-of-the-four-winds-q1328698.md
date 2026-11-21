# Palace of the Four Winds

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-four-winds-q1328698` |
| Coordinates | 52.24705, 21.00423 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24705/21.00423)) |
| Wikidata | [Q1328698](https://www.wikidata.org/wiki/Q1328698) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|architectural heritage monument |
| Administrative area | Warsaw |
| Inception | 1680 |
| Designations | municipal immovable monument in Poland\|immovable monument in Poland\|provincial register of monuments |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 17, road 284, building 58, zone 123, wall 4).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 18, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35008146 historic=castle Q1328698 4 m from ledger point
- roads capped: kept the 150 longest of 284 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24705/21.00423) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|architectural heritage monument; sitelinks=9; wikidata:Q1328698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/palace-of-the-four-winds-q1328698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
