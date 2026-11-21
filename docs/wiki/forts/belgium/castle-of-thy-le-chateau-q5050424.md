# Castle of Thy-le-Château

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-thy-le-chateau-q5050424` |
| Coordinates | 50.28199, 4.42615 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.28199/4.42615)) |
| Wikidata | [Q5050424](https://www.wikidata.org/wiki/Q5050424) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Walcourt |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | Propriété privée. |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, road 49, zone 24, wall 9, building 215, waterway 3).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 1, inferred 0, unknown 223.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8827578 historic=castle Q5050424 6 m from ledger point
- origin moved 10 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.28199/4.42615) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q5050424 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/castle-of-thy-le-chateau-q5050424.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
