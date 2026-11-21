# Jagdschloss Burghaun

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jagdschloss-burghaun-q19286379` |
| Coordinates | 50.69654, 9.7254 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.69654/9.7254)) |
| Wikidata | [Q19286379](https://www.wikidata.org/wiki/Q19286379) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|building |
| Administrative area | Burghaun |
| Inception | 1744 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `description` | Ehemaliges fürstäbtliches Jagdschloss und heutiges Forstamt in Burghaun |

## What the model contains

Tier **T1**, status `outline+walls`, 211 elements (outline 1, marker 40, road 41, building 384, zone 1, wall 7, waterway 1).

Evidence: documented 0, mapped 211, inferred 0, derived 0; heights documented 3, inferred 0, unknown 124.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/295139088 historic=castle Q19286379 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.69654/9.7254) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|building; sitelinks=2; wikidata:Q19286379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 211 elements); data/traces/jagdschloss-burghaun-q19286379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
