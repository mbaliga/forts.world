# Château de la Bonde

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-la-bonde-q2969887` |
| Coordinates | 48.40213, 2.46384 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.40213/2.46384)) |
| Wikidata | [Q2969887](https://www.wikidata.org/wiki/Q2969887) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Oncy-sur-École |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | chateau |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, marker 1, road 239, waterway 13, water 5, building 279, wall 163, zone 18).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 0, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115079466 historic=castle Q2969887 7 m from ledger point
- pruned to the outline plus 150 m: 719 -> 457 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 169 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.40213/2.46384) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q2969887 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 262 elements); data/traces/chateau-de-la-bonde-q2969887.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
