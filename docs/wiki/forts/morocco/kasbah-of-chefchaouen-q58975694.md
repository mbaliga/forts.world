# Kasbah of Chefchaouen

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kasbah-of-chefchaouen-q58975694` |
| Coordinates | 35.16867, -5.26151 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.16867/-5.26151)) |
| Wikidata | [Q58975694](https://www.wikidata.org/wiki/Q58975694) (CC0) |
| Wikidata class | castle |
| Types | kasbah\|heritage |
| Administrative area | Chefchaouen |
| Designations | Moroccan cultural heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 307 elements (outline 1, marker 3, road 180, building 854, wall 7, zone 23, water 1, waterway 1, retaining-wall 1).

Evidence: documented 0, mapped 307, inferred 0, derived 0; heights documented 2, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/379559177 historic=castle 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 854 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 180 mapped (trace size budget); minor lanes are not drawn
- origin moved 28 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.16867/-5.26151) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; kasbah\|heritage; sitelinks=4; wikidata:Q58975694 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 307 elements); data/traces/kasbah-of-chefchaouen-q58975694.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
