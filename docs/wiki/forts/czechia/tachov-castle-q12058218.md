# Tachov Castle

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tachov-castle-q12058218` |
| Coordinates | 49.7953, 12.6311 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.7953/12.6311)) |
| Wikidata | [Q12058218](https://www.wikidata.org/wiki/Q12058218) (CC0) |
| Wikidata class | castle |
| Types | castle\|hillfort\|château |
| Administrative area | Tachov |
| Inception | 1200 |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.tachovskyzamek.cz/ |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 6, road 126, water 6, waterway 3, zone 23, building 269, retaining-wall 4, wall 15).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 60, inferred 0, unknown 79.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/208076414 historic=castle Q12058218 22 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.7953/12.6311) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|hillfort\|château; sitelinks=2; wikidata:Q12058218 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/tachov-castle-q12058218.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
