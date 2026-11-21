# Blankenhain Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blankenhain-castle-q249264` |
| Coordinates | 50.86003, 11.34185 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.86003/11.34185)) |
| Wikidata | [Q249264](https://www.wikidata.org/wiki/Q249264) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château |
| Administrative area | Crimmitschau |
| Inception | 1601 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, road 110, building 414, waterway 1, retaining-wall 16, wall 5, zone 4).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 9, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1127722821 historic=castle Q249264 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 414 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.86003/11.34185) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château; sitelinks=12; wikidata:Q249264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/blankenhain-castle-q249264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
