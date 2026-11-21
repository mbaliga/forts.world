# Femöre Coastal Artillery Battery

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `femore-coastal-artillery-battery-q3366184` |
| Coordinates | 58.64898, 17.10838 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.64898/17.10838)) |
| Wikidata | [Q3366184](https://www.wikidata.org/wiki/Q3366184) (CC0) |
| Wikidata class | fortification |
| Types | military museum\|coastal battery |
| Administrative area | Oxelösund Municipality |
| Inception | 1964 |
| Wikipedia language editions | 8 |

## What the model contains

Tier **T1**, status `location-only`, 32 elements (marker 6, road 12, building 5, zone 6, coastline 1, water 2).

Evidence: documented 0, mapped 32, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":102,"medianInside":7.1,"medianOutside":10.2}
- sea-1: DEM check ok {"cells":457,"medianInside":5.8,"medianOutside":13.2}
- 201 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.64898/17.10838) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; military museum\|coastal battery; sitelinks=8; wikidata:Q3366184 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/femore-coastal-artillery-battery-q3366184.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
