# Roscrea Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `roscrea-castle-q27905794` |
| Coordinates | 52.95495, -7.79806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.95495/-7.79806)) |
| Wikidata | [Q27905794](https://www.wikidata.org/wiki/Q27905794) (CC0) |
| Wikidata class | castle |
| Types | motte-and-bailey castle |
| Administrative area | Roscrea |
| Designations | national monument of Ireland |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 252 elements (outline 1, marker 3, road 115, building 284, waterway 3, zone 1, wall 9).

Evidence: documented 0, mapped 252, inferred 0, derived 0; heights documented 26, inferred 0, unknown 103.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1060526578 historic=castle Q27905794 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 284 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.95495/-7.79806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; motte-and-bailey castle; sitelinks=6; wikidata:Q27905794 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 252 elements); data/traces/roscrea-castle-q27905794.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
