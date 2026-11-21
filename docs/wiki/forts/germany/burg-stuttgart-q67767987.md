# Burg Stuttgart

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-stuttgart-q67767987` |
| Coordinates | 48.77612, 9.17704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.77612/9.17704)) |
| Wikidata | [Q67767987](https://www.wikidata.org/wiki/Q67767987) (CC0) |
| Wikidata class | castle |
| Types | deserted castle site\|destroyed building or structure |
| Administrative area | Stuttgart |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 7, road 315, building 126, zone 31, water 4, waterway 1, retaining-wall 12, wall 4).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 47, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/22988 historic=castle Q384841 197 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 126 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 315 mapped (trace size budget); minor lanes are not drawn
- origin moved 195 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.77612/9.17704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; deserted castle site\|destroyed building or structure; sitelinks=1; wikidata:Q67767987 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/burg-stuttgart-q67767987.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
