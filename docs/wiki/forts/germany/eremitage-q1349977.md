# Eremitage

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `eremitage-q1349977` |
| Coordinates | 49.25242, 8.50844 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.25242/8.50844)) |
| Wikidata | [Q1349977](https://www.wikidata.org/wiki/Q1349977) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Waghäusel |
| Inception | 1724 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 151 elements (outline 1, marker 3, road 73, building 34, zone 21, wall 16, waterway 3).

Evidence: documented 0, mapped 151, inferred 0, derived 0; heights documented 9, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/487207374 historic=castle Q1349977 10 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.25242/8.50844) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=2; wikidata:Q1349977 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 151 elements); data/traces/eremitage-q1349977.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
