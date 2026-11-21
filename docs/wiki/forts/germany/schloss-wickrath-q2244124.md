# Schloss Wickrath

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-wickrath-q2244124` |
| Coordinates | 51.1284, 6.41618 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.1284/6.41618)) |
| Wikidata | [Q2244124](https://www.wikidata.org/wiki/Q2244124) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Mönchengladbach |
| Inception | 1748 |
| Designations | architectural heritage monument in North Rhine-Westphalia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 2, road 270, building 401, water 5, zone 20, wall 6, waterway 11).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 3, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/300398960 historic=castle Q2244124 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 401 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 270 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.1284/6.41618) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2244124 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/schloss-wickrath-q2244124.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
