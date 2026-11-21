# castel of Tournon

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-of-tournon-q2243758` |
| Coordinates | 45.06833, 4.83175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.06833/4.83175)) |
| Wikidata | [Q2243758](https://www.wikidata.org/wiki/Q2243758) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tournon-sur-Rhône |
| Inception | 1501 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 276 elements (outline 1, marker 4, road 123, waterway 1, zone 5, building 345, wall 15, retaining-wall 4, cliff 3).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 0, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/105030810 historic=castle Q2243758 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 345 mapped (trace size budget); the rest of the town is not drawn
- origin moved 13 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.06833/4.83175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q2243758 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 276 elements); data/traces/castel-of-tournon-q2243758.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
