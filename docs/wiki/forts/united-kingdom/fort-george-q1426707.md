# Fort George

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-george-q1426707` |
| Coordinates | 57.58366, -4.07007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.58366/-4.07007)) |
| Wikidata | [Q1426707](https://www.wikidata.org/wiki/Q1426707) (CC0) |
| Wikidata class | fort |
| Types | barracks\|fort\|military museum |
| Administrative area | Highland |
| Inception | 1748 |
| Designations | category A listed building |
| Wikipedia language editions | 15 |
| OSM `historic` | fort |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/LB1721 |

## What the model contains

Tier **T1**, status `outline+walls`, 181 elements (outline 1, marker 32, coastline 1, zone 18, road 67, building 21, retaining-wall 28, water 2, wall 11).

Evidence: documented 0, mapped 181, inferred 0, derived 1; heights documented 4, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34652563 historic=fort Q1426707 14 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4881,"medianInside":-2,"medianOutside":6.3}
- 3266 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.58366/-4.07007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; barracks\|fort\|military museum; sitelinks=15; wikidata:Q1426707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 181 elements); data/traces/fort-george-q1426707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
