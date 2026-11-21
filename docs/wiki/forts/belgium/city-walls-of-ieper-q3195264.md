# City walls of Ieper

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-ieper-q3195264` |
| Coordinates | 50.84513, 2.88651 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84513/2.88651)) |
| Wikidata | [Q3195264](https://www.wikidata.org/wiki/Q3195264) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ypres |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 270 elements (outline 1, road 116, zone 19, water 6, building 320, retaining-wall 1, waterway 4, wall 3).

Evidence: documented 0, mapped 270, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1749855 historic=ruins 112 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 320 mapped (trace size budget); the rest of the town is not drawn
- origin moved 112 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84513/2.88651) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q3195264 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 270 elements); data/traces/city-walls-of-ieper-q3195264.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
