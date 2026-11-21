# Elbtor Werben

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `elbtor-werben-q64482064` |
| Coordinates | 52.86161, 11.98429 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.86161/11.98429)) |
| Wikidata | [Q64482064](https://www.wikidata.org/wiki/Q64482064) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Werben |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | no |
| OSM `description` | Rundturm und Teil der mittelalterlichen Stadtmauer auf dem Grundstück Südwall 1 in Werben (Elbe) |

## What the model contains

Tier **T1**, status `outline+walls`, 212 elements (outline 1, marker 1, road 57, zone 5, building 393, wall 10, waterway 18).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 22, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/380006195 historic=yes 333 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 393 mapped (trace size budget); the rest of the town is not drawn
- origin moved 333 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.86161/11.98429) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q64482064 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 212 elements); data/traces/elbtor-werben-q64482064.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
