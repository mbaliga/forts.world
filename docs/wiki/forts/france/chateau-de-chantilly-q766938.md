# Château de Chantilly

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-chantilly-q766938` |
| Coordinates | 49.19383, 2.48545 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.19383/2.48545)) |
| Wikidata | [Q766938](https://www.wikidata.org/wiki/Q766938) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|château |
| Administrative area | Chantilly |
| Inception | 1386 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 30 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `website` | https://chateaudechantilly.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 169 elements (outline 1, road 116, wall 15, waterway 1, building 1, zone 30, water 5).

Evidence: documented 0, mapped 169, inferred 0, derived 0; heights documented 3, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2658413 historic=castle Q766938 15 m from ledger point
- origin moved 16 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.19383/2.48545) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|château; sitelinks=30; wikidata:Q766938 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 169 elements); data/traces/chateau-de-chantilly-q766938.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
