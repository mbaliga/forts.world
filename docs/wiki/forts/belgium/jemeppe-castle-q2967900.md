# Jemeppe Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jemeppe-castle-q2967900` |
| Coordinates | 50.18623, 5.31362 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.18623/5.31362)) |
| Wikidata | [Q2967900](https://www.wikidata.org/wiki/Q2967900) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Marche-en-Famenne |
| Inception | C13;C |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | https://www.chateaujemeppe.eu |

## What the model contains

Tier **T1**, status `outline+walls`, 77 elements (outline 1, marker 1, road 26, waterway 2, zone 11, building 31, wall 4, water 1).

Evidence: documented 0, mapped 77, inferred 0, derived 0; heights documented 0, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8800005 historic=castle Q2967900 1 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.18623/5.31362) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2967900 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 77 elements); data/traces/jemeppe-castle-q2967900.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
