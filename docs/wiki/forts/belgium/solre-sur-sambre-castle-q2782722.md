# Solre-sur-Sambre Castle

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `solre-sur-sambre-castle-q2782722` |
| Coordinates | 50.30968, 4.15573 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.30968/4.15573)) |
| Wikidata | [Q2782722](https://www.wikidata.org/wiki/Q2782722) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Erquelinnes |
| Designations | protected heritage property in Wallonia |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 189 elements (outline 1, water 4, road 44, zone 14, waterway 3, wall 3, building 361).

Evidence: documented 0, mapped 189, inferred 0, derived 0; heights documented 3, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1567029973 historic=castle Q2782722 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 361 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.30968/4.15573) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=5; wikidata:Q2782722 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 189 elements); data/traces/solre-sur-sambre-castle-q2782722.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
