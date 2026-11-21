# Château d'Uzès

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-uzes-q22953710` |
| Coordinates | 44.01292, 4.41974 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.01292/4.41974)) |
| Wikidata | [Q22953710](https://www.wikidata.org/wiki/Q22953710) (CC0) |
| Wikidata class | castle |
| Types | castle\|defensive\|château |
| Administrative area | Uzès |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 283 elements (outline 1, marker 3, road 140, building 691, zone 2, waterway 1, retaining-wall 7, wall 8, water 1).

Evidence: documented 0, mapped 283, inferred 0, derived 0; heights documented 6, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/224427190 historic=castle Q22953710 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 691 mapped (trace size budget); the rest of the town is not drawn
- origin moved 5 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.01292/4.41974) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|defensive\|château; sitelinks=4; wikidata:Q22953710 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 283 elements); data/traces/chateau-d-uzes-q22953710.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
