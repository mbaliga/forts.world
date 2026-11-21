# Agios Nikolaos Fort

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `agios-nikolaos-fort-q56240205` |
| Coordinates | 39.19988, 20.18816 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.19988/20.18816)) |
| Wikidata | [Q56240205](https://www.wikidata.org/wiki/Q56240205) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Paxoi Municipality |
| Designations | protected building in Greece\|archaeological site in Greece |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 17 elements (marker 1, road 5, coastline 3, wall 2, building 3, water 3).

Evidence: documented 0, mapped 17, inferred 0, derived 3; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":34,"medianInside":0.1,"medianOutside":16.8}
- sea-1: DEM check ok {"cells":38,"medianInside":0.2,"medianOutside":17}
- sea-2: DEM check failed {"cells":400,"medianInside":16.4,"medianOutside":0.5}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.19988/20.18816) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q56240205 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/agios-nikolaos-fort-q56240205.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
