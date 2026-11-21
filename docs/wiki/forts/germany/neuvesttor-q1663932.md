# Neuvesttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `neuvesttor-q1663932` |
| Coordinates | 48.1418, 11.5802 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1418/11.5802)) |
| Wikidata | [Q1663932](https://www.wikidata.org/wiki/Q1663932) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Altstadt-Lehel |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `website` | https://www.residenz-muenchen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 7, road 503, zone 61, waterway 6, building 156, wall 4, water 1, retaining-wall 3).

Evidence: documented 0, mapped 353, inferred 0, derived 0; heights documented 70, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7456359 historic=castle Q686548 80 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 156 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 503 mapped (trace size budget); minor lanes are not drawn
- origin moved 80 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1418/11.5802) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q1663932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/neuvesttor-q1663932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
