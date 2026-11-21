# Bozukkale (Rize)

> Türkiye · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bozukkale-rize-q110892017` |
| Coordinates | 41.0588, 40.63004 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.0588/40.63004)) |
| Wikidata | [Q110892017](https://www.wikidata.org/wiki/Q110892017) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Rize |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 53 elements (road 14, waterway 2, coastline 3, building 31, water 3).

Evidence: documented 0, mapped 53, inferred 0, derived 3; heights documented 0, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":57,"medianInside":0,"medianOutside":28}
- sea-1: DEM check failed {"cells":379,"medianInside":25.5,"medianOutside":0}
- sea-2: DEM check ok {"cells":6,"medianInside":0,"medianOutside":23.4}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.0588/40.63004) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q110892017 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 53 elements); data/traces/bozukkale-rize-q110892017.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
