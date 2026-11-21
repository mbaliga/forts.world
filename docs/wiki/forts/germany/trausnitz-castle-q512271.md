# Trausnitz Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trausnitz-castle-q512271` |
| Coordinates | 48.53168, 12.15212 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.53168/12.15212)) |
| Wikidata | [Q512271](https://www.wikidata.org/wiki/Q512271) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Landshut |
| Inception | 1204 |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 383 elements (outline 1, marker 2, road 216, zone 27, building 290, wall 68, retaining-wall 15).

Evidence: documented 0, mapped 383, inferred 0, derived 0; heights documented 14, inferred 0, unknown 189.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25206339 historic=castle Q512271 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 290 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 216 mapped (trace size budget); minor lanes are not drawn
- origin moved 44 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.53168/12.15212) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=15; wikidata:Q512271 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 383 elements); data/traces/trausnitz-castle-q512271.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
