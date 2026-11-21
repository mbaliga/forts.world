# Diateichisma

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `diateichisma-q64699224` |
| Coordinates | 37.96898, 23.7202 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.96898/23.7202)) |
| Wikidata | [Q64699224](https://www.wikidata.org/wiki/Q64699224) (CC0) |
| Wikidata class | fortification |
| Types | diateichisma |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 394 elements (outline 1, marker 24, zone 39, building 196, road 235, cliff 23, waterway 2, wall 25, retaining-wall 10).

Evidence: documented 0, mapped 394, inferred 0, derived 0; heights documented 36, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4423249 historic=castle Q131013 622 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 196 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 620 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.96898/23.7202) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; diateichisma; sitelinks=3; wikidata:Q64699224 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 394 elements); data/traces/diateichisma-q64699224.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
