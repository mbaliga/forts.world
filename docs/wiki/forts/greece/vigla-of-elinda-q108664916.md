# Vigla of Elinda

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vigla-of-elinda-q108664916` |
| Coordinates | 38.3875, 25.98424 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.3875/25.98424)) |
| Wikidata | [Q108664916](https://www.wikidata.org/wiki/Q108664916) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Chios Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 6 elements (marker 1, coastline 1, zone 1, water 3).

Evidence: documented 0, mapped 6, inferred 0, derived 3; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":25,"medianInside":0.9,"medianOutside":41.8}
- sea-1: DEM check ok {"cells":53,"medianInside":0,"medianOutside":47.8}
- sea-2: DEM check failed {"cells":6,"medianInside":14.1,"medianOutside":39.9}
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.3875/25.98424) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q108664916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/vigla-of-elinda-q108664916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
