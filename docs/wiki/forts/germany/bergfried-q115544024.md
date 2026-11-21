# Bergfried

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bergfried-q115544024` |
| Coordinates | 50.10869, 7.23917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.10869/7.23917)) |
| Wikidata | [Q115544024](https://www.wikidata.org/wiki/Q115544024) (CC0) |
| Wikidata class | fortification |
| Types | Bergfried |
| Administrative area | Beilstein |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.mosel-reisefuehrer.de/Burgfrieden/burgmetternich.html |

## What the model contains

Tier **T1**, status `outline+walls`, 238 elements (outline 1, road 101, building 126, waterway 1, retaining-wall 2, zone 5, wall 2).

Evidence: documented 0, mapped 238, inferred 0, derived 0; heights documented 9, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/109860718 historic=castle Q1013124 26 m from ledger point
- origin moved 27 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.10869/7.23917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Bergfried; sitelinks=2; wikidata:Q115544024 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 238 elements); data/traces/bergfried-q115544024.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
