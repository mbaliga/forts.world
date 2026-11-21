# Erthaler Hof

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `erthaler-hof-q1362466` |
| Coordinates | 50.00002, 8.26517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.00002/8.26517)) |
| Wikidata | [Q1362466](https://www.wikidata.org/wiki/Q1362466) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Mainz |
| Inception | 1734 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `website` | http://www.gdke-rlp.de |

## What the model contains

Tier **T1**, status `outline+walls`, 332 elements (outline 1, marker 25, road 312, building 291, wall 30, retaining-wall 3, zone 1, waterway 2).

Evidence: documented 0, mapped 332, inferred 0, derived 0; heights documented 93, inferred 0, unknown 60.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149461643 historic=castle Q1362466 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 291 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.00002/8.26517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=3; wikidata:Q1362466 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 332 elements); data/traces/erthaler-hof-q1362466.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
