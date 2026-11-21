# Manoir de la Caillerie

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-la-caillerie-q22963724` |
| Coordinates | 49.28096, -0.7139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.28096/-0.7139)) |
| Wikidata | [Q22963724](https://www.wikidata.org/wiki/Q22963724) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor estate |
| Administrative area | Bayeux |
| Inception | 1700 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 264 elements (outline 1, road 104, building 293, wall 8, zone 31).

Evidence: documented 0, mapped 264, inferred 0, derived 0; heights documented 0, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/132133650 historic=castle Q22963724 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 293 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.28096/-0.7139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor estate; sitelinks=2; wikidata:Q22963724 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 264 elements); data/traces/manoir-de-la-caillerie-q22963724.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
