# Château des Adhémar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-des-adhemar-q2579100` |
| Coordinates | 44.55916, 4.75428 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.55916/4.75428)) |
| Wikidata | [Q2579100](https://www.wikidata.org/wiki/Q2579100) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Montélimar |
| Inception | C12 |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `description` | https://www.ledauphine.com/culture-loisirs/2020/10/22/le-chateau-des-adhemar-rebaptise-chateau-de-montelimar |

## What the model contains

Tier **T1**, status `outline+walls`, 256 elements (outline 1, marker 2, road 126, building 625, water 1, wall 2, waterway 1, zone 3).

Evidence: documented 0, mapped 256, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74564181 historic=castle Q2579100 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 625 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.55916/4.75428) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=8; wikidata:Q2579100 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 256 elements); data/traces/chateau-des-adhemar-q2579100.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
