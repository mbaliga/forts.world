# Qal'at Zaman

> Egypt · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qal-at-zaman-q14218408` |
| Coordinates | 29.22091, 34.73959 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/29.22091/34.73959)) |
| Wikidata | [Q14218408](https://www.wikidata.org/wiki/Q14218408) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | South Sinai Governorate |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 5 elements (road 3, coastline 1, water 1).

Evidence: documented 0, mapped 5, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":71,"medianInside":4.9,"medianOutside":32.2}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/29.22091/34.73959) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=1; wikidata:Q14218408 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/qal-at-zaman-q14218408.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/egypt.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
