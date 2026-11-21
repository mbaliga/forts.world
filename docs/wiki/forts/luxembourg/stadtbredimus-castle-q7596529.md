# Stadtbredimus Castle

> Luxembourg · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbredimus-castle-q7596529` |
| Coordinates | 49.56412, 6.36821 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.56412/6.36821)) |
| Wikidata | [Q7596529](https://www.wikidata.org/wiki/Q7596529) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|château |
| Administrative area | Stadtbredimus |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | manor |

## What the model contains

Tier **T1**, status `location-only`, 148 elements (marker 2, road 36, waterway 3, building 84, zone 20, water 1, wall 2).

Evidence: documented 0, mapped 148, inferred 0, derived 0; heights documented 5, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13507289 historic=castle Q7596529 8 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (62 x 56 m)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.56412/6.36821) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|château; sitelinks=5; wikidata:Q7596529 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 153 elements); data/traces/stadtbredimus-castle-q7596529.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/luxembourg.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
