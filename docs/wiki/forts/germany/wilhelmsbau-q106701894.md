# Wilhelmsbau

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wilhelmsbau-q106701894` |
| Coordinates | 50.81006, 8.76786 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.81006/8.76786)) |
| Wikidata | [Q106701894](https://www.wikidata.org/wiki/Q106701894) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum |
| Administrative area | Marburg |
| Inception | 1497 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 8, zone 2, road 182, building 305, waterway 1, wall 7, retaining-wall 13).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 4, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/34334642 historic=castle Q106701894 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 305 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 182 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.81006/8.76786) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum; sitelinks=1; wikidata:Q106701894 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/wilhelmsbau-q106701894.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
