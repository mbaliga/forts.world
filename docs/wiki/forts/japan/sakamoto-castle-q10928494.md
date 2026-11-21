# Sakamoto Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sakamoto-castle-q10928494` |
| Coordinates | 35.05983, 135.87715 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.05983/135.87715)) |
| Wikidata | [Q10928494](https://www.wikidata.org/wiki/Q10928494) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle\|water castle\|destroyed building or structure |
| Administrative area | Shimo-Sakamoto |
| Inception | 1571 |
| Wikipedia language editions | 5 |
| OSM `historic` | yes |
| OSM `website` | https://kitakinnki.blog.jp/25-%E6%BB%8B%E8%B3%80/%E6%BB%8B%E8%B3%80%2007-01%E3%80%80%E8%A5%BF%E8%BF%91%E6%B1%9F%E8%B7%AF.pdf |

## What the model contains

Tier **T1**, status `location-only`, 313 elements (marker 2, waterway 37, road 169, building 467, zone 3, water 1).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 8, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/22016967 historic=yes 25472 m from ledger point
- site is a route relation of 443 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (21645 x 58590 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 467 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 169 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.05983/135.87715) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle\|water castle\|destroyed building or structure; sitelinks=5; wikidata:Q10928494 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 1 elements); data/traces/sakamoto-castle-q10928494.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
