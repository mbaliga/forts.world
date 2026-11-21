# Schaaken Castle

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schaaken-castle-q14906507` |
| Coordinates | 54.90583, 20.66889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.90583/20.66889)) |
| Wikidata | [Q14906507](https://www.wikidata.org/wiki/Q14906507) (CC0) |
| Wikidata class | castle |
| Types | castle\|architectural landmark |
| Inception | 1270 |
| Designations | regional cultural heritage site in Russia |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 65 elements (outline 1, road 22, water 3, wall 1, building 32, waterway 3, zone 3).

Evidence: documented 0, mapped 65, inferred 0, derived 0; heights documented 2, inferred 0, unknown 31.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/806015710 historic=castle Q14906507 62 m from ledger point
- origin moved 61 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.90583/20.66889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|architectural landmark; sitelinks=8; wikidata:Q14906507 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 65 elements); data/traces/schaaken-castle-q14906507.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
