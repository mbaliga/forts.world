# Grömlingovský palác

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gromlingovsky-palac-q12018492` |
| Coordinates | 50.08796, 14.40405 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.08796/14.40405)) |
| Wikidata | [Q12018492](https://www.wikidata.org/wiki/Q12018492) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Prague 1 |
| Inception | 1786 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 35, road 318, building 131, waterway 1, wall 24, retaining-wall 7, water 5, zone 10).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 89, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5651348 historic=castle Q12018492 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 131 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 318 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.08796/14.40405) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=4; wikidata:Q12018492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/gromlingovsky-palac-q12018492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
