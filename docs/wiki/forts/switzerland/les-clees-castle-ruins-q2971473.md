# Les Clées castle ruins

> Switzerland · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `les-clees-castle-ruins-q2971473` |
| Coordinates | 46.73071, 6.46267 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.73071/6.46267)) |
| Wikidata | [Q2971473](https://www.wikidata.org/wiki/Q2971473) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological site |
| Administrative area | Les Clées |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `location-only`, 103 elements (marker 1, waterway 6, road 40, zone 10, building 35, cliff 5, wall 6).

Evidence: documented 0, mapped 103, inferred 0, derived 0; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10696460 historic=castle Q2971473 6 m from ledger point
- site is a site relation of 2 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (26 x 28 m)
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.73071/6.46267) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological site; sitelinks=3; wikidata:Q2971473 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 110 elements); data/traces/les-clees-castle-ruins-q2971473.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
