# Castle of Châteauneuf-du-Pape

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-chateauneuf-du-pape-q8822076` |
| Coordinates | 44.05765, 4.8291 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.05765/4.8291)) |
| Wikidata | [Q8822076](https://www.wikidata.org/wiki/Q8822076) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|ruins\|château |
| Administrative area | Châteauneuf-du-Pape |
| Inception | 1333 |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 316 elements (outline 1, marker 1, road 138, building 397, zone 4, wall 37, retaining-wall 14, waterway 1).

Evidence: documented 0, mapped 316, inferred 0, derived 0; heights documented 1, inferred 0, unknown 170.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/16898120 historic=castle Q8822076 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 397 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.05765/4.8291) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|ruins\|château; sitelinks=8; wikidata:Q8822076 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 316 elements); data/traces/castle-of-chateauneuf-du-pape-q8822076.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
