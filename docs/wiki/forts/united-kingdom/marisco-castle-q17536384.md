# Marisco Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marisco-castle-q17536384` |
| Coordinates | 51.163, -4.65949 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.163/-4.65949)) |
| Wikidata | [Q17536384](https://www.wikidata.org/wiki/Q17536384) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Lundy |
| Designations | Grade II* listed building\|scheduled monument |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, road 17, building 6, wall 18, coastline 12, zone 6, retaining-wall 4, waterway 1, water 4).

Evidence: documented 0, mapped 69, inferred 0, derived 4; heights documented 0, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/296332656 historic=castle 11 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":399,"medianInside":61.2,"medianOutside":6.9}
- sea-1: DEM check ok {"cells":4,"medianInside":1,"medianOutside":55.6}
- sea-2: DEM check ok {"cells":54,"medianInside":-0.9,"medianOutside":69.9}
- sea-3: DEM check ok {"cells":39,"medianInside":-2.8,"medianOutside":68.2}
- 147 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.163/-4.65949) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q17536384 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 69 elements); data/traces/marisco-castle-q17536384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
