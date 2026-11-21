# Fort VII Zbarż

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-vii-zbarz-q1438777` |
| Coordinates | 52.17083, 20.98389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.17083/20.98389)) |
| Wikidata | [Q1438777](https://www.wikidata.org/wiki/Q1438777) (CC0) |
| Wikidata class | fort |
| Types | architectural heritage monument\|fort |
| Administrative area | Włochy |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 254 elements (outline 1, road 379, zone 37, building 56, wall 2, water 3, retaining-wall 4, waterway 1).

Evidence: documented 0, mapped 254, inferred 0, derived 0; heights documented 44, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/237005375 historic=fort Q1438777 30 m from ledger point
- roads capped: kept the 150 longest of 379 mapped (trace size budget); minor lanes are not drawn
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.17083/20.98389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural heritage monument\|fort; sitelinks=3; wikidata:Q1438777 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 254 elements); data/traces/fort-vii-zbarz-q1438777.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
