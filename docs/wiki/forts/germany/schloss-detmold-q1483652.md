# Schloss Detmold

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-detmold-q1483652` |
| Coordinates | 51.93623, 8.8777 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.93623/8.8777)) |
| Wikidata | [Q1483652](https://www.wikidata.org/wiki/Q1483652) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château |
| Administrative area | Detmold |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |
| OSM `description` | Das Schloss ist zum Teil ein öffentliches Museum, in dem stdl. Führungen stattfinden. |
| OSM `website` | https://www.schloss-detmold.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 6, road 238, waterway 8, water 7, building 265, wall 21, retaining-wall 3, zone 3).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 47, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6011684 historic=castle Q1483652 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 265 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 238 mapped (trace size budget); minor lanes are not drawn
- origin moved 29 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.93623/8.8777) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château; sitelinks=4; wikidata:Q1483652 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/schloss-detmold-q1483652.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
