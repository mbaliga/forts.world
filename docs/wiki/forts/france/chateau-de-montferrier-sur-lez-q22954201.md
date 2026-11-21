# château de Montferrier-sur-Lez

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-montferrier-sur-lez-q22954201` |
| Coordinates | 43.66674, 3.86119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.66674/3.86119)) |
| Wikidata | [Q22954201](https://www.wikidata.org/wiki/Q22954201) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Montferrier-sur-Lez |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, marker 2, road 83, zone 4, building 400, waterway 3, water 1, cliff 1, wall 10).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 2, inferred 0, unknown 128.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99851762 historic=castle Q22954201 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 400 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.66674/3.86119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=0; wikidata:Q22954201 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 225 elements); data/traces/chateau-de-montferrier-sur-lez-q22954201.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
