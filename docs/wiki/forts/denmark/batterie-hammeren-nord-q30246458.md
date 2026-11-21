# Batterie Hammeren Nord

> Denmark · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `batterie-hammeren-nord-q30246458` |
| Coordinates | 55.29818, 14.77318 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.29818/14.77318)) |
| Wikidata | [Q30246458](https://www.wikidata.org/wiki/Q30246458) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Bornholm regional municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 43 elements (marker 1, road 12, coastline 1, building 11, wall 1, zone 16, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 1, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":157,"medianInside":2.4,"medianOutside":8}
- 309 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.29818/14.77318) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=0; wikidata:Q30246458 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 43 elements); data/traces/batterie-hammeren-nord-q30246458.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
