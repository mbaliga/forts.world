# Brandenburg Gate

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brandenburg-gate-q82425` |
| Coordinates | 52.51627, 13.37772 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.51627/13.37772)) |
| Wikidata | [Q82425](https://www.wikidata.org/wiki/Q82425) (CC0) |
| Wikidata class | fortification |
| Types | triumphal arch\|city gate\|border checkpoint\|national symbol\|architectural landmark |
| Administrative area | Berlin |
| Inception | 1791 |
| Designations | cultural heritage monument in Berlin\|architectural heritage monument |
| Wikipedia language editions | 86 |
| OSM `historic` | monument |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 397 elements (outline 1, marker 2, road 247, building 122, zone 14, waterway 1, water 3, wall 7).

Evidence: documented 0, mapped 397, inferred 0, derived 0; heights documented 113, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/518071791 historic=monument Q82425 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.51627/13.37772) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; triumphal arch\|city gate\|border checkpoint\|national symbol\|architectural landmark; sitelinks=86; wikidata:Q82425 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 397 elements); data/traces/brandenburg-gate-q82425.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
