# Barroux Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barroux-castle-q2341945` |
| Coordinates | 44.13737, 5.09968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.13737/5.09968)) |
| Wikidata | [Q2341945](https://www.wikidata.org/wiki/Q2341945) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Le Barroux |
| Inception | 1701 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateaudubarroux.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 2, road 83, building 257, zone 8, waterway 1, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 0, inferred 0, unknown 260.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1272494 historic=castle Q2341945 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.13737/5.09968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q2341945 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/barroux-castle-q2341945.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
