# Château de Charles-Le-Téméraire

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-charles-le-temeraire-q2405730` |
| Coordinates | 46.43565, 4.27762 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.43565/4.27762)) |
| Wikidata | [Q2405730](https://www.wikidata.org/wiki/Q2405730) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Charolles |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | monastery |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 299 elements (outline 1, marker 1, road 146, waterway 14, building 443, zone 9, water 3, wall 5).

Evidence: documented 0, mapped 299, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/144258239 historic=monastery Q22965717 165 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 443 mapped (trace size budget); the rest of the town is not drawn
- origin moved 165 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.43565/4.27762) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q2405730 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 299 elements); data/traces/chateau-de-charles-le-temeraire-q2405730.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
