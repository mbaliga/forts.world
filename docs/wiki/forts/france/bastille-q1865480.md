# Bastille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastille-q1865480` |
| Coordinates | 48.85333, 2.36917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.85333/2.36917)) |
| Wikidata | [Q1865480](https://www.wikidata.org/wiki/Q1865480) (CC0) |
| Wikidata class | castle |
| Types | castle\|prison\|destroyed building or structure |
| Administrative area | 4th arrondissement of Paris |
| Inception | 1370 |
| Wikipedia language editions | 86 |
| OSM `historic` | monument |
| OSM `heritage` | 2 |
| OSM `website` | https://www.colonne-de-juillet.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 291 elements (outline 1, marker 5, road 399, water 3, building 211, wall 4, zone 2, waterway 3, retaining-wall 3).

Evidence: documented 0, mapped 291, inferred 0, derived 0; heights documented 89, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/227757683 historic=monument Q269641 18 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 211 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 399 mapped (trace size budget); minor lanes are not drawn
- origin moved 18 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.85333/2.36917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|prison\|destroyed building or structure; sitelinks=86; wikidata:Q1865480 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 291 elements); data/traces/bastille-q1865480.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
