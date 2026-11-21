# Kilkerran Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kilkerran-castle-q6407061` |
| Coordinates | 55.41656, -5.58957 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.41656/-5.58957)) |
| Wikidata | [Q6407061](https://www.wikidata.org/wiki/Q6407061) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Argyll and Bute |
| Designations | category C listed building |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 75 elements (road 28, zone 1, building 38, coastline 1, waterway 5, wall 1, water 1).

Evidence: documented 0, mapped 75, inferred 0, derived 1; heights documented 0, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":157,"medianInside":7.1,"medianOutside":10.2}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.41656/-5.58957) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q6407061 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 75 elements); data/traces/kilkerran-castle-q6407061.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
