# Larochette Castle

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `larochette-castle-q1011703` |
| Coordinates | 49.78555, 6.21681 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.78555/6.21681)) |
| Wikidata | [Q1011703](https://www.wikidata.org/wiki/Q1011703) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Larochette |
| Inception | 1100 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, road 140, waterway 7, building 213, cliff 20, wall 14, retaining-wall 9, zone 19).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 38, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26749823 historic=castle Q1011703 45 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 213 mapped (trace size budget); the rest of the town is not drawn
- origin moved 46 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.78555/6.21681) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q1011703 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/larochette-castle-q1011703.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
