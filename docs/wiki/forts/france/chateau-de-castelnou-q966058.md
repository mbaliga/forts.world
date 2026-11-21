# Château de Castelnou

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-castelnou-q966058` |
| Coordinates | 42.61889, 2.70278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.61889/2.70278)) |
| Wikidata | [Q966058](https://www.wikidata.org/wiki/Q966058) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Castelnou |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |
| OSM `description` | L'histoire du château vicomtal de Castelnou remonte au Xe siècle et demeure un des exemples les plus archaïque de forteresse du Moyen-Age des les Pyrénées-Orientales. |
| OSM `website` | https://www.tourisme-pyreneesorientales.com/destination/chateau-de-castelnou-castelnou-fr-5744574/ |

## What the model contains

Tier **T1**, status `outline+walls`, 219 elements (outline 1, marker 5, road 70, building 127, waterway 4, wall 11, zone 1).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 0, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72351150 historic=castle 18 m from ledger point
- origin moved 18 m from the ledger point to the outline centroid
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.61889/2.70278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q966058 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 219 elements); data/traces/chateau-de-castelnou-q966058.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
