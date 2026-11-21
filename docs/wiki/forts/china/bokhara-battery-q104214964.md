# Bokhara Battery

> China · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bokhara-battery-q104214964` |
| Coordinates | 22.20944, 114.25833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/22.20944/114.25833)) |
| Wikidata | [Q104214964](https://www.wikidata.org/wiki/Q104214964) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Hong Kong |
| Designations | Grade II historic building |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 54 elements (marker 1, road 32, building 6, cliff 1, zone 1, coastline 9, water 4).

Evidence: documented 0, mapped 54, inferred 0, derived 4; heights documented 1, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":5,"medianInside":15.5,"medianOutside":17.9}
- sea-1: DEM check ok {"cells":7,"medianInside":6.3,"medianOutside":18.8}
- sea-2: DEM check ok {"cells":91,"medianInside":6.8,"medianOutside":25.1}
- sea-3: DEM check failed {"cells":1,"medianInside":13,"medianOutside":17.9}
- 27 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/22.20944/114.25833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=2; wikidata:Q104214964 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 54 elements); data/traces/bokhara-battery-q104214964.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/china.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
