# Château de Losse

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-losse-q2242266` |
| Coordinates | 45.02959, 1.12895 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.02959/1.12895)) |
| Wikidata | [Q2242266](https://www.wikidata.org/wiki/Q2242266) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Thonac |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateaudelosse.com/ |

## What the model contains

Tier **T1**, status `location-only`, 35 elements (marker 1, road 17, waterway 1, water 1, building 7, wall 3, zone 2, retaining-wall 2, cliff 1).

Evidence: documented 0, mapped 35, inferred 0, derived 0; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14550540 historic=castle Q2242266 4 m from ledger point
- site is a site relation of 9 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (71 x 102 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.02959/1.12895) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=7; wikidata:Q2242266 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/chateau-de-losse-q2242266.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
