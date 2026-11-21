# Beinsteiner Torturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `beinsteiner-torturm-q61840024` |
| Coordinates | 48.83348, 9.31859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.83348/9.31859)) |
| Wikidata | [Q61840024](https://www.wikidata.org/wiki/Q61840024) (CC0) |
| Wikidata class | fortification |
| Types | prison\|museum\|gate tower\|Kulturdenkmal |
| Administrative area | Waiblingen |
| Inception | 1491 |
| Designations | Kulturdenkmal |
| Wikipedia language editions | 2 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 315 elements (outline 1, marker 6, road 330, waterway 10, building 384, water 2, wall 21, zone 1, retaining-wall 4).

Evidence: documented 0, mapped 315, inferred 0, derived 0; heights documented 18, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/127888293 historic=building 176 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 384 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 330 mapped (trace size budget); minor lanes are not drawn
- origin moved 178 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.83348/9.31859) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; prison\|museum\|gate tower\|Kulturdenkmal; sitelinks=2; wikidata:Q61840024 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 315 elements); data/traces/beinsteiner-torturm-q61840024.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
