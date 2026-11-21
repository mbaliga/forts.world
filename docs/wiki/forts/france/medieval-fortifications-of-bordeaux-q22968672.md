# Medieval Fortifications of Bordeaux

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `medieval-fortifications-of-bordeaux-q22968672` |
| Coordinates | 44.83522, -0.57117 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.83522/-0.57117)) |
| Wikidata | [Q22968672](https://www.wikidata.org/wiki/Q22968672) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Bordeaux |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 268 elements (outline 1, marker 4, road 134, building 576, zone 1, wall 7, water 1).

Evidence: documented 0, mapped 268, inferred 0, derived 0; heights documented 10, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/115507152 historic=building Q3145511 164 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 576 mapped (trace size budget); the rest of the town is not drawn
- origin moved 165 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.83522/-0.57117) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=0; wikidata:Q22968672 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 268 elements); data/traces/medieval-fortifications-of-bordeaux-q22968672.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
