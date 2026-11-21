# City walls in Zadar

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-in-zadar-q31843502` |
| Coordinates | 44.11417, 15.22778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.11417/15.22778)) |
| Wikidata | [Q31843502](https://www.wikidata.org/wiki/Q31843502) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Zadar |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 11, road 231, wall 22, coastline 3, building 395, zone 1, water 1).

Evidence: documented 0, mapped 309, inferred 0, derived 1; heights documented 15, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/363291213 historic=castle 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 395 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 231 mapped (trace size budget); minor lanes are not drawn
- origin moved 19 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":21,"medianInside":0,"medianOutside":6.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.11417/15.22778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=3; wikidata:Q31843502 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/city-walls-in-zadar-q31843502.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
