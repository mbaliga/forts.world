# Raby Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `raby-castle-q4583646` |
| Coordinates | 54.59092, -1.80175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.59092/-1.80175)) |
| Wikidata | [Q4583646](https://www.wikidata.org/wiki/Q4583646) (CC0) |
| Wikidata class | castle |
| Types | castle\|quadrangular castle\|historic house museum\|English country house |
| Administrative area | Raby with Keverstone |
| Inception | 1378 |
| Designations | Grade I listed building |
| Wikipedia language editions | 15 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.raby.co.uk/raby-castle/discover/the-park-gardens/ |

## What the model contains

Tier **T1**, status `outline+walls`, 32 elements (outline 1, zone 3, water 1, road 20, waterway 4, wall 2, building 1).

Evidence: documented 0, mapped 32, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12665676 historic=castle Q4583646 8 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.59092/-1.80175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|quadrangular castle\|historic house museum\|English country house; sitelinks=15; wikidata:Q4583646 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 32 elements); data/traces/raby-castle-q4583646.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
