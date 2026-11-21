# Château de Vizille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-vizille-q951768` |
| Coordinates | 45.07565, 5.77331 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.07565/5.77331)) |
| Wikidata | [Q951768](https://www.wikidata.org/wiki/Q951768) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Vizille |
| Inception | 1200 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 4, road 160, water 1, waterway 28, building 345, cliff 2, retaining-wall 4, wall 3).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/104135294 historic=castle Q951768 27 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 345 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 160 mapped (trace size budget); minor lanes are not drawn
- origin moved 27 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.07565/5.77331) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=7; wikidata:Q951768 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/chateau-de-vizille-q951768.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
