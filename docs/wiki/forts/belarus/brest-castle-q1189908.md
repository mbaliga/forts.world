# Brest Castle

> Belarus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brest-castle-q1189908` |
| Coordinates | 52.08041, 23.65535 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.08041/23.65535)) |
| Wikidata | [Q1189908](https://www.wikidata.org/wiki/Q1189908) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Brest |
| Inception | 0901 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Photos: https://openpoimap.org/?map=various&zoom=17&lat=52.08302&lon=23.65507&layers=B00FFFFFFFFFFFFFTFFFFFF |

## What the model contains

Tier **T1**, status `outline+walls`, 143 elements (outline 1, marker 7, waterway 4, road 73, zone 38, building 9, water 2, wall 9).

Evidence: documented 0, mapped 143, inferred 0, derived 0; heights documented 6, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9165830 historic=castle Q23868 273 m from ledger point
- origin moved 743 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.08041/23.65535) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=10; wikidata:Q1189908 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 143 elements); data/traces/brest-castle-q1189908.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belarus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
