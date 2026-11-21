# Stolzenfels Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stolzenfels-castle-q833779` |
| Coordinates | 50.30311, 7.59208 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.30311/7.59208)) |
| Wikidata | [Q833779](https://www.wikidata.org/wiki/Q833779) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Koblenz |
| Inception | 1259 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |
| OSM `website` | http://www.schloss-stolzenfels.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, marker 1, road 75, building 84, zone 5, waterway 15, retaining-wall 1, wall 3, water 4).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 4, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9189937 historic=castle Q833779 5 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.30311/7.59208) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=19; wikidata:Q833779 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/stolzenfels-castle-q833779.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
