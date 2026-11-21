# Alzey Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alzey-castle-q450713` |
| Coordinates | 49.746, 8.11625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.746/8.11625)) |
| Wikidata | [Q450713](https://www.wikidata.org/wiki/Q450713) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Rhineland-Palatinate |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 227 elements (outline 1, marker 3, road 97, building 333, wall 5, waterway 1).

Evidence: documented 0, mapped 227, inferred 0, derived 0; heights documented 11, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29285023 historic=castle Q450713 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- origin moved 26 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.746/8.11625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q450713 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 227 elements); data/traces/alzey-castle-q450713.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
