# Nantwich Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nantwich-castle-q6964386` |
| Coordinates | 53.067, -2.523 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.067/-2.523)) |
| Wikidata | [Q6964386](https://www.wikidata.org/wiki/Q6964386) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 1 |

## What the model contains

Tier **T1**, status `outline+walls`, 206 elements (outline 1, road 64, building 355, waterway 1, wall 18, zone 2).

Evidence: documented 0, mapped 206, inferred 0, derived 0; heights documented 1, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1436784246 historic=building 602 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 355 mapped (trace size budget); the rest of the town is not drawn
- origin moved 603 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.067/-2.523) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=2; wikidata:Q6964386 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 206 elements); data/traces/nantwich-castle-q6964386.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
