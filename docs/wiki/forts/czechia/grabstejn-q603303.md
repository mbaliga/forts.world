# Grabštejn

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `grabstejn-q603303` |
| Coordinates | 50.84613, 14.87619 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.84613/14.87619)) |
| Wikidata | [Q603303](https://www.wikidata.org/wiki/Q603303) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Grabštejn |
| Inception | 1300 |
| Designations | national cultural monument of the Czech Republic\|cultural monument of the Czech Republic |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.hrad-grabstejn.cz/ |

## What the model contains

Tier **T1**, status `outline-only`, 67 elements (outline 1, water 1, road 26, waterway 7, building 31, zone 1).

Evidence: documented 0, mapped 67, inferred 0, derived 0; heights documented 9, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/101330464 historic=castle Q603303 24 m from ledger point
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.84613/14.87619) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=17; wikidata:Q603303 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 67 elements); data/traces/grabstejn-q603303.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
