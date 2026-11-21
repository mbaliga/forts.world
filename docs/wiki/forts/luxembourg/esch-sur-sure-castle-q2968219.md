# Esch-sur-Sûre Castle

> Luxembourg · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `esch-sur-sure-castle-q2968219` |
| Coordinates | 49.91111, 5.93472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.91111/5.93472)) |
| Wikidata | [Q2968219](https://www.wikidata.org/wiki/Q2968219) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Esch-sur-Sûre |
| Inception | 1200 |
| Wikipedia language editions | 10 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 374 elements (outline 1, marker 8, water 2, road 128, waterway 5, zone 29, building 151, cliff 52, wall 24, retaining-wall 5).

Evidence: documented 0, mapped 374, inferred 0, derived 0; heights documented 1, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/121112291 historic=castle Q2968219 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 151 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.91111/5.93472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=10; wikidata:Q2968219 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 374 elements); data/traces/esch-sur-sure-castle-q2968219.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
