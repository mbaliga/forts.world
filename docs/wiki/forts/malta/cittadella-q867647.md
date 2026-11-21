# Cittadella

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cittadella-q867647` |
| Coordinates | 36.04639, 14.23944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.04639/14.23944)) |
| Wikidata | [Q867647](https://www.wikidata.org/wiki/Q867647) (CC0) |
| Wikidata class | fort |
| Types | citadel |
| Administrative area | Rabat |
| Inception | 1500 |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 21 |
| OSM `historic` | citywalls |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 237 elements (outline 1, marker 20, road 204, building 530, wall 388, zone 36).

Evidence: documented 0, mapped 237, inferred 0, derived 0; heights documented 24, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/29565140 historic=citywalls Q867647 16 m from ledger point
- pruned to the outline plus 60 m: 1179 -> 340 elements
- present-day buildings capped: kept the 30 nearest the outline centre of 66 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 40 longest of 108 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.04639/14.23944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; citadel; sitelinks=21; wikidata:Q867647 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 237 elements); data/traces/cittadella-q867647.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
