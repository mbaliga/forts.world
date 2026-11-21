# Kastro Kales

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastro-kales-q56450749` |
| Coordinates | 35.00381, 25.73754 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.00381/25.73754)) |
| Wikidata | [Q56450749](https://www.wikidata.org/wiki/Q56450749) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Ierapetra Municipality |
| Inception | 1212 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 389 elements (outline 1, road 61, coastline 2, building 315, zone 5, wall 1, retaining-wall 2, water 2).

Evidence: documented 0, mapped 389, inferred 0, derived 2; heights documented 296, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/35586035 historic=castle Q56450749 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":384,"medianInside":-1638.3,"medianOutside":-1638.3}
- sea-1: DEM check failed {"cells":288,"medianInside":-1638.3,"medianOutside":-1638.3}
- 1230 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.00381/25.73754) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=5; wikidata:Q56450749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 389 elements); data/traces/kastro-kales-q56450749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
