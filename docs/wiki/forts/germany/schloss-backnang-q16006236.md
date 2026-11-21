# Schloss Backnang

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-backnang-q16006236` |
| Coordinates | 48.94572, 9.43274 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.94572/9.43274)) |
| Wikidata | [Q16006236](https://www.wikidata.org/wiki/Q16006236) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Backnang |
| Inception | 1605 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Ehemaliges Backnanger Stadtschloss. Erbaut von Heinrich Schickhardt. Begonnen 1606, um 1630 Bauarbeiten kriegsbedingt eingestellt. |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 16, road 435, building 277, wall 14, retaining-wall 17, zone 3, cliff 1, waterway 1, water 1).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 79, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/149108288 historic=castle Q16006236 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 277 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 435 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.94572/9.43274) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=1; wikidata:Q16006236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/schloss-backnang-q16006236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
