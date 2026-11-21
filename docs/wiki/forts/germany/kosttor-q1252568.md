# Kosttor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kosttor-q1252568` |
| Coordinates | 48.1384, 11.5808 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.1384/11.5808)) |
| Wikidata | [Q1252568](https://www.wikidata.org/wiki/Q1252568) (CC0) |
| Wikidata class | fortification |
| Types | gate tower\|destroyed building or structure |
| Administrative area | Altstadt-Lehel |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | yes |
| OSM `website` | https://www.residenz-muenchen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 354 elements (outline 1, marker 7, road 502, zone 61, waterway 7, building 156, wall 4, water 1, retaining-wall 3).

Evidence: documented 0, mapped 354, inferred 0, derived 0; heights documented 70, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7456359 historic=castle Q686548 333 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 156 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 502 mapped (trace size budget); minor lanes are not drawn
- origin moved 336 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.1384/11.5808) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gate tower\|destroyed building or structure; sitelinks=2; wikidata:Q1252568 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 354 elements); data/traces/kosttor-q1252568.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
