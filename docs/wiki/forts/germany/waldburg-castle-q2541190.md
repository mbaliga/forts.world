# Waldburg Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `waldburg-castle-q2541190` |
| Coordinates | 47.75889, 9.71194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.75889/9.71194)) |
| Wikidata | [Q2541190](https://www.wikidata.org/wiki/Q2541190) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Waldburg |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `barrier` | wall |
| OSM `website` | https://www.schlosswaldburg.de |

## What the model contains

Tier **T1**, status `outline+walls`, 160 elements (outline 1, marker 1, road 61, zone 4, building 91, retaining-wall 1).

Evidence: documented 0, mapped 160, inferred 0, derived 0; heights documented 5, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/229848106 historic=castle Q2541190 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.75889/9.71194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q2541190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 160 elements); data/traces/waldburg-castle-q2541190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
