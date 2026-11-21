# St. Nikolaus

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-nikolaus-q75105525` |
| Coordinates | 49.49811, 9.8996 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.49811/9.8996)) |
| Wikidata | [Q75105525](https://www.wikidata.org/wiki/Q75105525) (CC0) |
| Wikidata class | fort |
| Types | church building\|fortified church |
| Administrative area | Weikersheim |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 175 elements (outline 1, marker 2, road 43, waterway 2, zone 1, wall 5, water 1, building 359).

Evidence: documented 0, mapped 175, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/503363431 historic=building Q75105525 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.49811/9.8996) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; church building\|fortified church; sitelinks=2; wikidata:Q75105525 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 175 elements); data/traces/st-nikolaus-q75105525.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
