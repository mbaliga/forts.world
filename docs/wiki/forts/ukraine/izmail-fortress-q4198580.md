# Izmail Fortress

> Ukraine · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `izmail-fortress-q4198580` |
| Coordinates | 45.34004, 28.81019 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.34004/28.81019)) |
| Wikidata | [Q4198580](https://www.wikidata.org/wiki/Q4198580) (CC0) |
| Wikidata class | fort |
| Types | fortress\|neighborhood |
| Administrative area | Izmail Urban Hromada |
| Inception | 1592 |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 399 elements (outline 1, road 241, building 129, wall 16, zone 8, retaining-wall 1, waterway 3).

Evidence: documented 0, mapped 399, inferred 0, derived 0; heights documented 45, inferred 0, unknown 101.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18789937 historic=castle Q4198580 465 m from ledger point
- origin moved 459 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.34004/28.81019) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|neighborhood; sitelinks=6; wikidata:Q4198580 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 399 elements); data/traces/izmail-fortress-q4198580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ukraine.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
