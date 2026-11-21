# Tower behind Monks

> Estonia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-behind-monks-q12370551` |
| Coordinates | 59.43842, 24.7496 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.43842/24.7496)) |
| Wikidata | [Q12370551](https://www.wikidata.org/wiki/Q12370551) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tallinn |
| Wikipedia language editions | 5 |
| OSM `historic` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 2, road 138, building 302, wall 56, retaining-wall 2, zone 5).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 77, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21628453 historic=city_wall 136 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 302 mapped (trace size budget); the rest of the town is not drawn
- origin moved 138 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.43842/24.7496) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=5; wikidata:Q12370551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/tower-behind-monks-q12370551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/estonia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
