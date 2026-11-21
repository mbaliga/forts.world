# Beustertor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beustertor-q64221125` |
| Coordinates | 52.89208, 11.75735 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.89208/11.75735)) |
| Wikidata | [Q64221125](https://www.wikidata.org/wiki/Q64221125) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Seehausen (Altmark) |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 1 |
| OSM `historic` | building |
| OSM `heritage` | yes |
| OSM `description` | Salzkirche in Seehausen |

## What the model contains

Tier **T1**, status `outline-only`, 163 elements (outline 1, road 34, building 377, water 1, waterway 2, zone 5).

Evidence: documented 0, mapped 163, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262197068 historic=building Q64217551 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 377 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.89208/11.75735) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q64221125 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 163 elements); data/traces/beustertor-q64221125.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
