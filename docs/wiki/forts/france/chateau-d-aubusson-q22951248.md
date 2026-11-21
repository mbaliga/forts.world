# Château d'Aubusson

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-aubusson-q22951248` |
| Coordinates | 45.95644, 2.17249 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.95644/2.17249)) |
| Wikidata | [Q22951248](https://www.wikidata.org/wiki/Q22951248) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Aubusson |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 296 elements (outline 1, marker 1, road 146, zone 6, waterway 3, building 453, water 3, wall 11, retaining-wall 5).

Evidence: documented 0, mapped 296, inferred 0, derived 0; heights documented 1, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220465257 historic=castle Q22951248 55 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 453 mapped (trace size budget); the rest of the town is not drawn
- origin moved 55 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.95644/2.17249) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château; sitelinks=2; wikidata:Q22951248 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 296 elements); data/traces/chateau-d-aubusson-q22951248.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
