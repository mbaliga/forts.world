# Château de Roanne

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-roanne-q22967293` |
| Coordinates | 46.04012, 4.07199 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.04012/4.07199)) |
| Wikidata | [Q22967293](https://www.wikidata.org/wiki/Q22967293) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Roanne |
| Inception | C11 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, marker 2, road 135, building 390, zone 7, retaining-wall 4, wall 17).

Evidence: documented 0, mapped 286, inferred 0, derived 0; heights documented 1, inferred 0, unknown 140.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124645901 historic=building Q22967295 42 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 390 mapped (trace size budget); the rest of the town is not drawn
- origin moved 42 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.04012/4.07199) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q22967293 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/chateau-de-roanne-q22967293.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
