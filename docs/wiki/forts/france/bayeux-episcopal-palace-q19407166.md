# Bayeux Episcopal Palace

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bayeux-episcopal-palace-q19407166` |
| Coordinates | 49.27623, -0.70257 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.27623/-0.70257)) |
| Wikidata | [Q19407166](https://www.wikidata.org/wiki/Q19407166) (CC0) |
| Wikidata class | castle |
| Types | castle\|episcopal palace |
| Administrative area | Bayeux |
| Inception | C16 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 346 elements (outline 1, marker 9, road 159, building 601, waterway 5, zone 20, water 3, wall 38).

Evidence: documented 0, mapped 346, inferred 0, derived 0; heights documented 3, inferred 0, unknown 155.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132133441 historic=building Q17347121 110 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 601 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 159 mapped (trace size budget); minor lanes are not drawn
- origin moved 110 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.27623/-0.70257) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|episcopal palace; sitelinks=2; wikidata:Q19407166 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 346 elements); data/traces/bayeux-episcopal-palace-q19407166.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
