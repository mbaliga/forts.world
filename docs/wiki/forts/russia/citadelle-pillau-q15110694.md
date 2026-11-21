# Citadelle Pillau

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `citadelle-pillau-q15110694` |
| Coordinates | 54.64275, 19.88726 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.64275/19.88726)) |
| Wikidata | [Q15110694](https://www.wikidata.org/wiki/Q15110694) (CC0) |
| Wikidata class | fort |
| Types | fortress\|architectural landmark |
| Administrative area | Baltiysk |
| Inception | 1625 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 15, road 144, building 97, coastline 2, waterway 1, retaining-wall 6, wall 4, zone 7, water 2).

Evidence: documented 0, mapped 279, inferred 0, derived 2; heights documented 79, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/48371990 historic=castle 23 m from ledger point
- origin moved 29 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":244,"medianInside":-3,"medianOutside":2.1}
- sea-1: DEM check ok {"cells":5,"medianInside":1.6,"medianOutside":1.8}
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.64275/19.88726) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|architectural landmark; sitelinks=4; wikidata:Q15110694 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/citadelle-pillau-q15110694.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
