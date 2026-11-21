# Goodrich Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `goodrich-castle-q5583571` |
| Coordinates | 51.8767, -2.6157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.8767/-2.6157)) |
| Wikidata | [Q5583571](https://www.wikidata.org/wiki/Q5583571) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Goodrich |
| Inception | 1001 |
| Designations | Grade I listed building\|scheduled monument |
| Wikipedia language editions | 16 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.english-heritage.org.uk/visit/places/goodrich-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, waterway 1, road 12, building 1, zone 6, wall 2).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/163719 historic=castle Q5583571 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.8767/-2.6157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=16; wikidata:Q5583571 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/goodrich-castle-q5583571.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
