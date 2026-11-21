# Landguard Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `landguard-fort-q6484546` |
| Coordinates | 51.9376, 1.32208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.9376/1.32208)) |
| Wikidata | [Q6484546](https://www.wikidata.org/wiki/Q6484546) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort\|military museum\|local museum |
| Administrative area | Suffolk Coastal |
| Inception | 1540 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/landguard-fort/ |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, road 43, coastline 2, building 13, wall 1, waterway 1, water 2).

Evidence: documented 0, mapped 63, inferred 0, derived 2; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32007009 historic=fort Q6484546 121 m from ledger point
- origin moved 121 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":289,"medianInside":2,"medianOutside":3.1}
- sea-1: DEM check ok {"cells":72,"medianInside":1.7,"medianOutside":2.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.9376/1.32208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort\|military museum\|local museum; sitelinks=2; wikidata:Q6484546 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/landguard-fort-q6484546.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
