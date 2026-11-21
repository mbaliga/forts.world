# Prøvestenen

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pr-vestenen-q3374787` |
| Coordinates | 55.67851, 12.63449 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.67851/12.63449)) |
| Wikidata | [Q3374787](https://www.wikidata.org/wiki/Q3374787) (CC0) |
| Wikidata class | fort |
| Types | ancient monument\|destroyed building or structure\|sea fort |
| Administrative area | Copenhagen Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, road 22, building 96, coastline 2, wall 18, water 2).

Evidence: documented 0, mapped 141, inferred 0, derived 2; heights documented 0, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/725187176 historic=fort Q3374787 22 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":640,"medianInside":1.6,"medianOutside":0.5}
- sea-1: DEM check ok {"cells":254,"medianInside":0.1,"medianOutside":1.8}
- 289 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.67851/12.63449) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; ancient monument\|destroyed building or structure\|sea fort; sitelinks=1; wikidata:Q3374787 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/pr-vestenen-q3374787.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
