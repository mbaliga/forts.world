# Bergfeste Dilsberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bergfeste-dilsberg-q176836` |
| Coordinates | 49.39861, 8.83694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.39861/8.83694)) |
| Wikidata | [Q176836](https://www.wikidata.org/wiki/Q176836) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Neckargemünd |
| Inception | 1150 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `barrier` | wall |
| OSM `website` | http://www.burg-dilsberg.de |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 3, road 160, building 143, zone 11, wall 27, retaining-wall 7, water 1, waterway 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 100, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/87543057 historic=castle Q176836 36 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.39861/8.83694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q176836 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/bergfeste-dilsberg-q176836.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
