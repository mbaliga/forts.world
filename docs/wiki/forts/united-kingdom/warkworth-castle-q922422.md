# Warkworth Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warkworth-castle-q922422` |
| Coordinates | 55.3452, -1.61178 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.3452/-1.61178)) |
| Wikidata | [Q922422](https://www.wikidata.org/wiki/Q922422) (CC0) |
| Wikidata class | castle |
| Types | castle\|motte-and-bailey castle\|historic house museum |
| Administrative area | Warkworth |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 20 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/warkworth-castle-and-hermitage/ |

## What the model contains

Tier **T1**, status `outline+walls`, 210 elements (outline 1, road 41, building 151, water 5, zone 7, wall 1, waterway 1, coastline 3).

Evidence: documented 0, mapped 210, inferred 0, derived 4; heights documented 3, inferred 0, unknown 149.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/699938585 historic=castle Q922422 19 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":239,"medianInside":0.9,"medianOutside":10.7}
- sea-1: DEM check ok {"cells":561,"medianInside":4.7,"medianOutside":14.9}
- sea-2: DEM check failed {"cells":2098,"medianInside":12.9,"medianOutside":4.9}
- sea-3: DEM check failed {"cells":2484,"medianInside":7.8,"medianOutside":3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.3452/-1.61178) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|motte-and-bailey castle\|historic house museum; sitelinks=20; wikidata:Q922422 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 210 elements); data/traces/warkworth-castle-q922422.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
