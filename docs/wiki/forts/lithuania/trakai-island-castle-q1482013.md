# Trakai Island Castle

> Lithuania · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `trakai-island-castle-q1482013` |
| Coordinates | 54.6525, 24.93306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.6525/24.93306)) |
| Wikidata | [Q1482013](https://www.wikidata.org/wiki/Q1482013) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Trakai |
| Wikipedia language editions | 37 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://trakaimuziejus.lt/ |

## What the model contains

Tier **T1**, status `outline+walls`, 26 elements (outline 1, road 21, wall 3, zone 1).

Evidence: documented 0, mapped 26, inferred 0, derived 0; heights documented 3, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3111261 historic=castle Q1482013 69 m from ledger point
- origin moved 69 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.6525/24.93306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=37; wikidata:Q1482013 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 26 elements); data/traces/trakai-island-castle-q1482013.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
