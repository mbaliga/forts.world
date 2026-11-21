# Castle of Sommières

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-sommieres-q15944310` |
| Coordinates | 43.7827, 4.09187 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7827/4.09187)) |
| Wikidata | [Q15944310](https://www.wikidata.org/wiki/Q15944310) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Sommières |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `description` | La tour Bermonde est implantée à l'extrémité sud de l'éperon et remonte probablement au début du 13ème siècle. La chapelle castrale, datant du début du 13ème siècle, était érigée au nord, à peu de distance de la porte-tour constituant l'entrée principale. |
| OSM `website` | http://chateau-sommieres.fr |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 2, road 154, water 3, waterway 3, building 601, wall 7, zone 11, retaining-wall 1, cliff 3).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 4, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/541081004 historic=castle Q15944310 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 601 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7827/4.09187) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q15944310 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/castle-of-sommieres-q15944310.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
