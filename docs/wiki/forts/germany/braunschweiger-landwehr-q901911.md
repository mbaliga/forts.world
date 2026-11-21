# Braunschweiger Landwehr

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `braunschweiger-landwehr-q901911` |
| Coordinates | 52.2641, 10.5264 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2641/10.5264)) |
| Wikidata | [Q901911](https://www.wikidata.org/wiki/Q901911) (CC0) |
| Wikidata class | fortification |
| Types | landwehr |
| Administrative area | Brunswick |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.schloss-arkaden.de/ |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 32, road 334, building 204, wall 4, water 3, waterway 2, zone 6, retaining-wall 1).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 93, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23802102 historic=castle Q882796 118 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 204 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 334 mapped (trace size budget); minor lanes are not drawn
- origin moved 117 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2641/10.5264) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; landwehr; sitelinks=2; wikidata:Q901911 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/braunschweiger-landwehr-q901911.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
