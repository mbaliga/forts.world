# Kastellet

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kastellet-q221812` |
| Coordinates | 55.69161, 12.59357 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.69161/12.59357)) |
| Wikidata | [Q221812](https://www.wikidata.org/wiki/Q221812) (CC0) |
| Wikidata class | fort |
| Types | star fort\|citadel |
| Administrative area | Copenhagen Municipality |
| Inception | 1662 |
| Designations | monument on Kulturstyrelsen register\|protected ancient monument in Denmark |
| Wikipedia language editions | 21 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 380 elements (outline 1, marker 33, road 439, water 4, building 188, zone 49, wall 18, coastline 2, retaining-wall 1, waterway 2).

Evidence: documented 0, mapped 380, inferred 0, derived 1; heights documented 26, inferred 0, unknown 113.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/175208408 historic=fort Q221812 71 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 188 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 439 mapped (trace size budget); minor lanes are not drawn
- origin moved 67 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":924,"medianInside":3,"medianOutside":4.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.69161/12.59357) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; star fort\|citadel; sitelinks=21; wikidata:Q221812 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 380 elements); data/traces/kastellet-q221812.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
