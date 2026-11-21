# Fort Christiansværn

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-christiansv-rn-q4994731` |
| Coordinates | 17.7471, -64.7017 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/17.7471/-64.7017)) |
| Wikidata | [Q4994731](https://www.wikidata.org/wiki/Q4994731) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Christiansted |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, marker 12, road 39, coastline 4, building 82, wall 3, zone 4, water 2).

Evidence: documented 0, mapped 147, inferred 0, derived 2; heights documented 0, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18111825 historic=fort Q4994731 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":398,"medianInside":2.4,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":200,"medianInside":0.5,"medianOutside":2.9}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/17.7471/-64.7017) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=7; wikidata:Q4994731 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 147 elements); data/traces/fort-christiansv-rn-q4994731.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
