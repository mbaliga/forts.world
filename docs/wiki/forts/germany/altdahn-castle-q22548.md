# Altdahn Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `altdahn-castle-q22548` |
| Coordinates | 49.1503, 7.8025 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.1503/7.8025)) |
| Wikidata | [Q22548](https://www.wikidata.org/wiki/Q22548) (CC0) |
| Wikidata class | castle |
| Types | rock castle |
| Administrative area | Dahn |
| Inception | 1200 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 108 elements (outline 1, marker 1, road 72, zone 6, building 6, cliff 8, water 1, retaining-wall 7, wall 6).

Evidence: documented 0, mapped 108, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/55385085 historic=castle Q22548 36 m from ledger point
- origin moved 37 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.1503/7.8025) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; rock castle; sitelinks=8; wikidata:Q22548 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 109 elements); data/traces/altdahn-castle-q22548.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 108 elements; outline osm:way/55385085 historic=castle Q22548 36 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
