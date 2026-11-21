# château de Nizas

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-nizas-q22953983` |
| Coordinates | 43.51242, 3.40803 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.51242/3.40803)) |
| Wikidata | [Q22953983](https://www.wikidata.org/wiki/Q22953983) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Nizas |
| Inception | C16 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 8, road 76, building 340, wall 5, waterway 1, zone 4).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 7, inferred 0, unknown 118.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11339423 historic=castle Q22953983 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 340 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.51242/3.40803) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=0; wikidata:Q22953983 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/chateau-de-nizas-q22953983.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
