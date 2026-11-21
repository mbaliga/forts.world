# Fort VIII Służew

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-viii-s-uzew-q1438778` |
| Coordinates | 52.16592, 21.04061 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.16592/21.04061)) |
| Wikidata | [Q1438778](https://www.wikidata.org/wiki/Q1438778) (CC0) |
| Wikidata class | fort |
| Types | architectural heritage monument\|fort |
| Administrative area | Ursynów |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 223 elements (outline 1, marker 4, road 453, zone 169, water 5, building 212, waterway 4, cliff 3, wall 1).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 56, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/762512702 historic=fort Q1438778 106 m from ledger point
- pruned to the outline plus 150 m: 852 -> 422 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 105 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 234 mapped (trace size budget); minor lanes are not drawn
- origin moved 108 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.16592/21.04061) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural heritage monument\|fort; sitelinks=3; wikidata:Q1438778 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 223 elements); data/traces/fort-viii-s-uzew-q1438778.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
