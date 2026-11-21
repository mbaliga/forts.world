# Konstantin Battery

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konstantin-battery-q79337728` |
| Coordinates | 44.62667, 33.51222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.62667/33.51222)) |
| Wikidata | [Q79337728](https://www.wikidata.org/wiki/Q79337728) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Sevastopol |
| Inception | 1840 |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 39 elements (outline 1, marker 4, road 17, building 6, coastline 2, wall 2, zone 5, water 2).

Evidence: documented 0, mapped 39, inferred 0, derived 2; heights documented 2, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/170480405 historic=castle 30 m from ledger point
- origin moved 28 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":175,"medianInside":0.2,"medianOutside":1.2}
- sea-1: DEM check failed {"cells":216,"medianInside":1,"medianOutside":0.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.62667/33.51222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q79337728 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 39 elements); data/traces/konstantin-battery-q79337728.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
