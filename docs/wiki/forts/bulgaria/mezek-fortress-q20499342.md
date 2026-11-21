# Mezek Fortress

> Bulgaria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mezek-fortress-q20499342` |
| Coordinates | 41.73722, 26.08361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.73722/26.08361)) |
| Wikidata | [Q20499342](https://www.wikidata.org/wiki/Q20499342) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Haskovo |
| Inception | 1100 |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `website` | http://visitsvilengrad.com/?page_id=45 |

## What the model contains

Tier **T1**, status `outline+walls`, 63 elements (outline 1, marker 2, road 38, wall 2, building 13, waterway 3, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 63, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/4819441 historic=castle Q20499342 24 m from ledger point
- origin moved 30 m from the ledger point to the outline centroid
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.73722/26.08361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=8; wikidata:Q20499342 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 63 elements); data/traces/mezek-fortress-q20499342.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bulgaria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
