# Gdov Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gdov-kremlin-q3696965` |
| Coordinates | 58.74046, 27.81975 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.74046/27.81975)) |
| Wikidata | [Q3696965](https://www.wikidata.org/wiki/Q3696965) (CC0) |
| Wikidata class | castle |
| Types | castle\|kremlin\|archaeological site\|architectural heritage monument\|historic site\|destroyed building or structure\|architectural landmark |
| Administrative area | Gdov |
| Inception | 1431 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `outline+walls`, 208 elements (outline 1, marker 6, road 69, building 344, waterway 4, water 1, zone 3, wall 4).

Evidence: documented 0, mapped 208, inferred 0, derived 0; heights documented 12, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29077682 historic=castle Q3696965 17 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 344 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.74046/27.81975) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|kremlin\|archaeological site\|architectural heritage monument\|historic site\|destroyed building or structure\|architectural landmark; sitelinks=8; wikidata:Q3696965 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 208 elements); data/traces/gdov-kremlin-q3696965.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
