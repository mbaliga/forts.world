# Fort San Lucian

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-lucian-q91348` |
| Coordinates | 35.83028, 14.54361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.83028/14.54361)) |
| Wikidata | [Q91348](https://www.wikidata.org/wiki/Q91348) (CC0) |
| Wikidata class | fort |
| Types | fort\|Wignacourt towers |
| Administrative area | Marsaxlokk |
| Inception | 1610 |
| Designations | Grade 1 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, coastline 2, road 16, building 9, wall 1, zone 3, water 2).

Evidence: documented 0, mapped 34, inferred 0, derived 2; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136701522 historic=castle 34 m from ledger point
- origin moved 32 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":566,"medianInside":0,"medianOutside":0.2}
- sea-1: DEM check failed {"cells":6,"medianInside":0,"medianOutside":0}
- 9 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.83028/14.54361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|Wignacourt towers; sitelinks=8; wikidata:Q91348 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/fort-san-lucian-q91348.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
