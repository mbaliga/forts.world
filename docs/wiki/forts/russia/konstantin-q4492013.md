# Konstantin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `konstantin-q4492013` |
| Coordinates | 59.99361, 29.70556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.99361/29.70556)) |
| Wikidata | [Q4492013](https://www.wikidata.org/wiki/Q4492013) (CC0) |
| Wikidata class | fort |
| Types | fortification\|architectural landmark |
| Administrative area | Kronstadt |
| Inception | 1808 |
| Designations | part of UNESCO World Heritage Site\|federal cultural heritage site in Russia |
| UNESCO WHC id | 540-003a 3 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `heritage` | 1 |
| OSM `website` | https://kronfort.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, marker 6, road 89, building 27, coastline 15, retaining-wall 2, wall 1, zone 10, waterway 1, water 2).

Evidence: documented 0, mapped 154, inferred 0, derived 2; heights documented 8, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8527082 historic=fort Q4492013 170 m from ledger point
- origin moved 154 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":36,"medianInside":0,"medianOutside":-0.4}
- sea-1: DEM check ok {"cells":1305,"medianInside":-3,"medianOutside":4}
- 2137 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.99361/29.70556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|architectural landmark; sitelinks=4; wikidata:Q4492013 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 154 elements); data/traces/konstantin-q4492013.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
