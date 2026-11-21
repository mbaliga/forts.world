# Château d'Apremont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-apremont-q5118719` |
| Coordinates | 46.74922, -1.7416 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.74922/-1.7416)) |
| Wikidata | [Q5118719](https://www.wikidata.org/wiki/Q5118719) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Apremont |
| Inception | C16 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 257 elements (outline 1, marker 5, zone 14, water 7, road 83, building 366, wall 13, waterway 7, retaining-wall 7).

Evidence: documented 0, mapped 257, inferred 0, derived 0; heights documented 0, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/297752318 historic=castle Q5118719 23 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 366 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.74922/-1.7416) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=5; wikidata:Q5118719 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 257 elements); data/traces/chateau-d-apremont-q5118719.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
