# Brancaleone Fortress

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brancaleone-fortress-q3939380` |
| Coordinates | 44.42308, 12.20508 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.42308/12.20508)) |
| Wikidata | [Q3939380](https://www.wikidata.org/wiki/Q3939380) (CC0) |
| Wikidata class | castle |
| Types | castle\|rocca |
| Administrative area | Ravenna |
| Inception | 1450 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 1, road 146, building 368, wall 18, zone 10, retaining-wall 3).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 4, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1187325348 historic=castle Q3939380 85 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 368 mapped (trace size budget); the rest of the town is not drawn
- origin moved 86 m from the ledger point to the outline centroid
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.42308/12.20508) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|rocca; sitelinks=4; wikidata:Q3939380 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/brancaleone-fortress-q3939380.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
