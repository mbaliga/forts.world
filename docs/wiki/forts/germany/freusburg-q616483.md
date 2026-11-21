# Freusburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `freusburg-q616483` |
| Coordinates | 50.8267, 7.88111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.8267/7.88111)) |
| Wikidata | [Q616483](https://www.wikidata.org/wiki/Q616483) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Freusburg |
| Inception | 0913 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://www.djh-wl.de/de/jugendherbergen/freusburg |

## What the model contains

Tier **T1**, status `outline+walls`, 130 elements (outline 1, road 41, zone 2, building 83, waterway 2, wall 1).

Evidence: documented 0, mapped 130, inferred 0, derived 0; heights documented 2, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/608698394 historic=castle Q616483 19 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.8267/7.88111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q616483 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 130 elements); data/traces/freusburg-q616483.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
