# Stein Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stein-castle-q135483334` |
| Coordinates | 48.80596, 9.21558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.80596/9.21558)) |
| Wikidata | [Q135483334](https://www.wikidata.org/wiki/Q135483334) (CC0) |
| Wikidata class | castle |
| Types | castle\|destroyed building or structure |
| Administrative area | Stuttgart |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `website` | https://www.ackerbuerger.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 21, road 222, building 427, zone 8, wall 17, retaining-wall 3, waterway 2).

Evidence: documented 0, mapped 322, inferred 0, derived 0; heights documented 78, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135863414 historic=building 40 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 427 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 222 mapped (trace size budget); minor lanes are not drawn
- origin moved 40 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.80596/9.21558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|destroyed building or structure; sitelinks=1; wikidata:Q135483334 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/stein-castle-q135483334.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
