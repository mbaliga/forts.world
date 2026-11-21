# Tower of Flies

> Israel · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-flies-q7829764` |
| Coordinates | 32.91858, 35.07209 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.91858/35.07209)) |
| Wikidata | [Q7829764](https://www.wikidata.org/wiki/Q7829764) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Acre |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 145 elements (outline 1, marker 2, road 85, wall 9, coastline 1, building 44, zone 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 145, inferred 0, derived 1; heights documented 0, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11205783 historic=castle 606 m from ledger point
- origin moved 607 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":41,"medianInside":3.4,"medianOutside":12.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.91858/35.07209) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=6; wikidata:Q7829764 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 145 elements); data/traces/tower-of-flies-q7829764.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/israel.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
