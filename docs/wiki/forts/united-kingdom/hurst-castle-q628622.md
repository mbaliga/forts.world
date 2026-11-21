# Hurst Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hurst-castle-q628622` |
| Coordinates | 50.7064, -1.5512 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.7064/-1.5512)) |
| Wikidata | [Q628622](https://www.wikidata.org/wiki/Q628622) (CC0) |
| Wikidata class | fort |
| Types | fort\|Device Forts\|military museum |
| Administrative area | Milford-on-Sea |
| Inception | 1541 |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/hurst-castle |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, building 6, road 14, wall 2, zone 6, retaining-wall 1, coastline 3, water 3).

Evidence: documented 0, mapped 36, inferred 0, derived 3; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3851561 historic=castle Q628622 58 m from ledger point
- origin moved 78 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2441,"medianInside":-0.9,"medianOutside":1.3}
- sea-1: DEM check failed {"cells":540,"medianInside":-0.2,"medianOutside":-0.6}
- sea-2: DEM check failed {"cells":48,"medianInside":0.5,"medianOutside":-0.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.7064/-1.5512) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|Device Forts\|military museum; sitelinks=12; wikidata:Q628622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/hurst-castle-q628622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
