# Wohnturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wohnturm-q41232985` |
| Coordinates | 49.66374, 10.06378 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.66374/10.06378)) |
| Wikidata | [Q41232985](https://www.wikidata.org/wiki/Q41232985) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | Ochsenfurt |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | yes |
| OSM `description` | Ehemaliger Kernbau einer wohl ehemaligen beringten Burganlage |
| OSM `ruins` | no |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 10, waterway 2, road 150, building 332, wall 3, zone 16, retaining-wall 1).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 4, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/366743262 historic=castle 259 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 332 mapped (trace size budget); the rest of the town is not drawn
- origin moved 258 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.66374/10.06378) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=1; wikidata:Q41232985 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/wohnturm-q41232985.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
