# Schloss Ditzingen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-ditzingen-q15844440` |
| Coordinates | 48.82819, 9.06815 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.82819/9.06815)) |
| Wikidata | [Q15844440](https://www.wikidata.org/wiki/Q15844440) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château |
| Administrative area | Ditzingen |
| Designations | heritage monument according to transitional provisions in Baden-Württemberg |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 305 elements (outline 1, road 167, waterway 8, building 224, zone 23, wall 2, water 1).

Evidence: documented 0, mapped 305, inferred 0, derived 0; heights documented 51, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99482900 historic=castle Q15844440 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 224 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 167 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.82819/9.06815) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château; sitelinks=1; wikidata:Q15844440 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 305 elements); data/traces/schloss-ditzingen-q15844440.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
