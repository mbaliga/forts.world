# Dover Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dover-castle-q950970` |
| Coordinates | 51.12827, 1.3235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.12827/1.3235)) |
| Wikidata | [Q950970](https://www.wikidata.org/wiki/Q950970) (CC0) |
| Wikidata class | castle |
| Types | castle\|bunker\|fort\|history museum\|archaeological site |
| Administrative area | Dover |
| Inception | 1179 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 36 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/dover-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 382 elements (outline 1, marker 25, road 347, building 139, cliff 3, wall 31, retaining-wall 4, zone 44, coastline 2, water 2).

Evidence: documented 0, mapped 382, inferred 0, derived 2; heights documented 29, inferred 0, unknown 126.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/26658038 historic=castle Q950970 67 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 139 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 347 mapped (trace size budget); minor lanes are not drawn
- origin moved 61 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":3.3,"medianOutside":59.8}
- sea-1: DEM check ok {"cells":519,"medianInside":-2.9,"medianOutside":63.1}
- 412 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.12827/1.3235) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|bunker\|fort\|history museum\|archaeological site; sitelinks=36; wikidata:Q950970 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 382 elements); data/traces/dover-castle-q950970.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
