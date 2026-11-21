# Château de Calmont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-calmont-q5118751` |
| Coordinates | 43.28653, 1.6325 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.28653/1.6325)) |
| Wikidata | [Q5118751](https://www.wikidata.org/wiki/Q5118751) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Calmont |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 184 elements (outline 1, marker 3, road 58, waterway 1, building 477, zone 1).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1483057473 historic=castle Q5118751 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 477 mapped (trace size budget); the rest of the town is not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.28653/1.6325) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=3; wikidata:Q5118751 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 184 elements); data/traces/chateau-de-calmont-q5118751.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
