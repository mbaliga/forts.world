# Gaulcem Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `gaulcem-castle-q22996618` |
| Coordinates | 43.67466, 4.13427 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.67466/4.13427)) |
| Wikidata | [Q22996618](https://www.wikidata.org/wiki/Q22996618) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|château |
| Administrative area | Lunel |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |
| OSM `description` | Qualités architecturales, pour les parties médiévales et l'enceinte castrale avec le porche et la tour, de la Renaissance pour le décor de façade et de l'escalier en vis du logis, que du 1er quart du 19e s pour la façade néoclassique de l'ancienne halle. |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/merimee/PA34000017 |

## What the model contains

Tier **T1**, status `outline+walls`, 275 elements (outline 1, marker 1, road 158, building 1065, zone 1, waterway 1, wall 1).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 2, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62740506 historic=castle Q22996618 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 1065 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.67466/4.13427) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|château; sitelinks=2; wikidata:Q22996618 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 275 elements); data/traces/gaulcem-castle-q22996618.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
