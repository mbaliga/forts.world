# Nagahama Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nagahama-castle-q11653286` |
| Coordinates | 35.01833, 138.88806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.01833/138.88806)) |
| Wikidata | [Q11653286](https://www.wikidata.org/wiki/Q11653286) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin in Japan |
| Administrative area | Numazu |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 198 elements (marker 1, waterway 1, road 28, coastline 4, building 162, water 2).

Evidence: documented 0, mapped 198, inferred 0, derived 2; heights documented 0, inferred 0, unknown 162.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":195,"medianInside":0.3,"medianOutside":4.8}
- sea-1: DEM check failed {"cells":398,"medianInside":3.3,"medianOutside":0}
- 96 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.01833/138.88806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin in Japan; sitelinks=3; wikidata:Q11653286 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 198 elements); data/traces/nagahama-castle-q11653286.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
