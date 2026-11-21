# Portland Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portland-castle-q1638741` |
| Coordinates | 50.56836, -2.4468 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.56836/-2.4468)) |
| Wikidata | [Q1638741](https://www.wikidata.org/wiki/Q1638741) (CC0) |
| Wikidata class | castle |
| Types | castle\|fort\|historic house museum\|military museum\|independent museum |
| Administrative area | Portland |
| Inception | 1539 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/portland-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, marker 2, coastline 2, road 94, building 30, wall 5, zone 5, water 2).

Evidence: documented 0, mapped 141, inferred 0, derived 2; heights documented 5, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/147476398 historic=castle Q1638741 11 m from ledger point
- origin moved 13 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":562,"medianInside":-0.4,"medianOutside":3.3}
- sea-1: DEM check failed {"cells":1596,"medianInside":2.6,"medianOutside":-0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.56836/-2.4468) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fort\|historic house museum\|military museum\|independent museum; sitelinks=10; wikidata:Q1638741 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/portland-castle-q1638741.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
