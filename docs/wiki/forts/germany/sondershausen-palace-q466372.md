# Sondershausen Palace

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sondershausen-palace-q466372` |
| Coordinates | 51.37174, 10.86751 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.37174/10.86751)) |
| Wikidata | [Q466372](https://www.wikidata.org/wiki/Q466372) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|royal palace |
| Administrative area | Sondershausen |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 7, road 582, waterway 18, water 6, building 384, wall 14, retaining-wall 18, zone 6).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 9, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15713448 historic=castle Q466372 81 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 582 mapped (trace size budget); minor lanes are not drawn
- origin moved 78 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.37174/10.86751) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|royal palace; sitelinks=8; wikidata:Q466372 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/sondershausen-palace-q466372.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
