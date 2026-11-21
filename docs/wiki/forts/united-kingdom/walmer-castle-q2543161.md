# Walmer Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `walmer-castle-q2543161` |
| Coordinates | 51.2006, 1.40201 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2006/1.40201)) |
| Wikidata | [Q2543161](https://www.wikidata.org/wiki/Q2543161) (CC0) |
| Wikidata class | castle |
| Types | castle\|historic house museum\|history museum\|fort |
| Administrative area | Walmer |
| Inception | 1539 |
| Designations | Grade II listed park and garden\|scheduled monument |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/walmer-castle-and-gardens/ |

## What the model contains

Tier **T1**, status `outline+walls`, 231 elements (outline 1, road 122, zone 6, water 2, building 95, retaining-wall 1, coastline 1, wall 3).

Evidence: documented 0, mapped 231, inferred 0, derived 1; heights documented 6, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39218139 historic=castle Q2543161 148 m from ledger point
- origin moved 156 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":210,"medianInside":-0.3,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2006/1.40201) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historic house museum\|history museum\|fort; sitelinks=12; wikidata:Q2543161 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 231 elements); data/traces/walmer-castle-q2543161.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
