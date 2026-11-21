# Kogangsport

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kogangsport-q12322412` |
| Coordinates | 54.7896, 9.43025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7896/9.43025)) |
| Wikidata | [Q12322412](https://www.wikidata.org/wiki/Q12322412) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Flensburg |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `location-only`, 347 elements (marker 30, road 595, water 3, zone 4, building 1400, wall 34, coastline 2, waterway 4).

Evidence: documented 0, mapped 347, inferred 0, derived 1; heights documented 25, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4019749 historic=yes 103 m from ledger point
- site is a route relation of 47 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (1075 x 3845 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 1400 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 595 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":247,"medianInside":3.4,"medianOutside":29.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7896/9.43025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q12322412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 347 elements); data/traces/kogangsport-q12322412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
