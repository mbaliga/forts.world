# Karatsu Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `karatsu-castle-q1073585` |
| Coordinates | 33.45354, 129.97819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.45354/129.97819)) |
| Wikidata | [Q1073585](https://www.wikidata.org/wiki/Q1073585) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|castle |
| Administrative area | Karatsu |
| Inception | 1602 |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | shiro |
| OSM `description` | 築城年:1608年 |
| OSM `website` | https://saga-museum.jp/nagoya/ |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, marker 9, road 65, coastline 2, water 2, retaining-wall 21, building 102, wall 13, zone 10, waterway 1).

Evidence: documented 0, mapped 226, inferred 0, derived 1; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/500427895 historic=castle Q1073585 1 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":73,"medianInside":2.2,"medianOutside":5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.45354/129.97819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|castle; sitelinks=9; wikidata:Q1073585 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/karatsu-castle-q1073585.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
