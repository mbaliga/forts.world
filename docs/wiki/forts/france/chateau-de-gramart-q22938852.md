# Château de Gramart

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-gramart-q22938852` |
| Coordinates | 43.58285, 1.3466 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.58285/1.3466)) |
| Wikidata | [Q22938852](https://www.wikidata.org/wiki/Q22938852) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Tournefeuille |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |
| OSM `website` | https://www.mairie-tournefeuille.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 318 elements (outline 1, road 199, building 274, waterway 4, water 2, zone 39, wall 2).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 15, inferred 0, unknown 107.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74787690 historic=castle Q22938852 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 274 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 199 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.58285/1.3466) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q22938852 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 318 elements); data/traces/chateau-de-gramart-q22938852.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
