# Kyffhausen Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kyffhausen-castle-q2139442` |
| Coordinates | 51.41278, 11.10833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.41278/11.10833)) |
| Wikidata | [Q2139442](https://www.wikidata.org/wiki/Q2139442) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Kyffhäuserland |
| Designations | Heritage monument in Thuringia |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 167 elements (outline 1, marker 5, road 110, cliff 2, zone 6, waterway 2, retaining-wall 6, wall 19, building 14, water 2).

Evidence: documented 0, mapped 167, inferred 0, derived 0; heights documented 4, inferred 0, unknown 35.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204245288 historic=castle Q2139442 77 m from ledger point
- origin moved 77 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.41278/11.10833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=7; wikidata:Q2139442 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 167 elements); data/traces/kyffhausen-castle-q2139442.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
