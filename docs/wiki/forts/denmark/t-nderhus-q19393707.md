# Tønderhus

> Denmark · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `t-nderhus-q19393707` |
| Coordinates | 54.93229, 8.86659 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.93229/8.86659)) |
| Wikidata | [Q19393707](https://www.wikidata.org/wiki/Q19393707) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Tønder Municipality |
| Inception | 1270 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `location-only`, 223 elements (marker 2, road 79, building 131, zone 4, waterway 7).

Evidence: documented 0, mapped 223, inferred 0, derived 0; heights documented 6, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/21090583 historic=castle Q19393707 12 m from ledger point
- site is a site relation of 30 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (66 x 62 m)
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.93229/8.86659) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q19393707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 239 elements); data/traces/t-nderhus-q19393707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
