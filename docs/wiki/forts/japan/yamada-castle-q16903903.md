# Yamada Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yamada-castle-q16903903` |
| Coordinates | 26.43361, 127.785 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.43361/127.785)) |
| Wikidata | [Q16903903](https://www.wikidata.org/wiki/Q16903903) (CC0) |
| Wikidata class | fortification |
| Types | gusuku |
| Administrative area | Onna |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 32 elements (road 18, waterway 4, coastline 2, building 7, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":22,"medianInside":7.4,"medianOutside":48.5}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.43361/127.785) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; gusuku; sitelinks=3; wikidata:Q16903903 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/yamada-castle-q16903903.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
