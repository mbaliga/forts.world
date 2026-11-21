# Uzhhorod Castle

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `uzhhorod-castle-q832656` |
| Coordinates | 48.62167, 22.30669 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.62167/22.30669)) |
| Wikidata | [Q832656](https://www.wikidata.org/wiki/Q832656) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Uzhhorod |
| Designations | architectural monument of national significance of Ukraine |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 317 elements (outline 1, marker 4, road 164, zone 14, building 237, wall 22, water 2, retaining-wall 2, waterway 2).

Evidence: documented 0, mapped 317, inferred 0, derived 0; heights documented 57, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/15762897 historic=castle Q832656 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 237 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 164 mapped (trace size budget); minor lanes are not drawn
- origin moved 33 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.62167/22.30669) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=18; wikidata:Q832656 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 317 elements); data/traces/uzhhorod-castle-q832656.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
