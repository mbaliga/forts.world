# Franchimont Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `franchimont-castle-q474267` |
| Coordinates | 50.52768, 5.82399 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.52768/5.82399)) |
| Wikidata | [Q474267](https://www.wikidata.org/wiki/Q474267) (CC0) |
| Wikidata class | castle |
| Types | château\|rock castle |
| Administrative area | Theux |
| Designations | Exceptional heritage property of Wallonia\|protected heritage property in Wallonia |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |
| OSM `ruins` | yes |
| OSM `website` | https://chateau-franchimont.be |

## What the model contains

Tier **T1**, status `outline+walls`, 154 elements (outline 1, road 174, building 116, waterway 19, zone 41, retaining-wall 13, wall 65, water 3).

Evidence: documented 0, mapped 154, inferred 0, derived 0; heights documented 0, inferred 0, unknown 58.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17885242 historic=castle Q1011789 12 m from ledger point
- pruned to the outline plus 80 m: 432 -> 154 elements
- origin moved 6 m from the ledger point to the outline centroid
- 39 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.52768/5.82399) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; château\|rock castle; sitelinks=8; wikidata:Q474267 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/franchimont-castle-q474267.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
