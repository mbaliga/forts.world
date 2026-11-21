# Château fort de Ripert

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-fort-de-ripert-q83719544` |
| Coordinates | 44.38424, 4.98994 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.38424/4.98994)) |
| Wikidata | [Q83719544](https://www.wikidata.org/wiki/Q83719544) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Valréas |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 258 elements (outline 1, marker 3, road 130, building 989, waterway 2, wall 2).

Evidence: documented 0, mapped 258, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/91961517 historic=yes Q15945306 38 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 989 mapped (trace size budget); the rest of the town is not drawn
- origin moved 37 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.38424/4.98994) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q83719544 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 258 elements); data/traces/chateau-fort-de-ripert-q83719544.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
