# Rydboholm Castle

> Sweden · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rydboholm-castle-q366683` |
| Coordinates | 59.44028, 18.18556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.44028/18.18556)) |
| Wikidata | [Q366683](https://www.wikidata.org/wiki/Q366683) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural ensemble\|seat farm |
| Administrative area | Österåker Municipality |
| Inception | 1548 |
| Designations | individual listed building complex |
| Wikipedia language editions | 11 |

## What the model contains

Tier **T1**, status `location-only`, 23 elements (marker 1, coastline 1, zone 3, road 7, building 7, waterway 3, water 1).

Evidence: documented 0, mapped 23, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":315,"medianInside":6.3,"medianOutside":12.4}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.44028/18.18556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural ensemble\|seat farm; sitelinks=11; wikidata:Q366683 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/rydboholm-castle-q366683.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
