# Albrechtsburg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `albrechtsburg-q679009` |
| Coordinates | 51.1666, 13.47138 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1666/13.47138)) |
| Wikidata | [Q679009](https://www.wikidata.org/wiki/Q679009) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Meissen |
| Inception | 0929 |
| Designations | heritage monument in Saxony |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `website` | https://www.albrechtsburg-meissen.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 362 elements (outline 1, marker 6, water 1, road 221, waterway 3, building 185, zone 16, retaining-wall 39, wall 26).

Evidence: documented 0, mapped 362, inferred 0, derived 0; heights documented 19, inferred 0, unknown 166.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/204553512 historic=castle Q679009 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 185 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 221 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1666/13.47138) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=17; wikidata:Q679009 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 362 elements); data/traces/albrechtsburg-q679009.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
