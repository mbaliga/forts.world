# château de Fresnay-sur-Sarthe

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-fresnay-sur-sarthe-q20898661` |
| Coordinates | 48.28164, 0.01847 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.28164/0.01847)) |
| Wikidata | [Q20898661](https://www.wikidata.org/wiki/Q20898661) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Fresnay-sur-Sarthe |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 222 elements (outline 1, marker 2, road 90, building 610, zone 1, waterway 3, wall 3, water 1, retaining-wall 1).

Evidence: documented 0, mapped 222, inferred 0, derived 0; heights documented 0, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233547164 historic=building 67 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 610 mapped (trace size budget); the rest of the town is not drawn
- origin moved 70 m from the ledger point to the centre of the mapped site
- 1640 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.28164/0.01847) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q20898661 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 222 elements); data/traces/chateau-de-fresnay-sur-sarthe-q20898661.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
