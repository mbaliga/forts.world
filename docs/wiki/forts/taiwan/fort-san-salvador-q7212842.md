# Fort San Salvador

> Taiwan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-san-salvador-q7212842` |
| Coordinates | 25.15899, 121.77205 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.15899/121.77205)) |
| Wikidata | [Q7212842](https://www.wikidata.org/wiki/Q7212842) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Hoping Island |
| Inception | 1626 |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, coastline 2, road 18, building 1, water 2).

Evidence: documented 0, mapped 24, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/548644913 historic=fort Q15945230 37 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":0.6,"medianOutside":10.9}
- sea-1: DEM check ok {"cells":44,"medianInside":4.4,"medianOutside":12.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.15899/121.77205) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=4; wikidata:Q7212842 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 24 elements); data/traces/fort-san-salvador-q7212842.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/taiwan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
