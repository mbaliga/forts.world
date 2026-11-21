# Hochbunker im Florapark

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hochbunker-im-florapark-q130336568` |
| Coordinates | 53.56191, 9.96015 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.56191/9.96015)) |
| Wikidata | [Q130336568](https://www.wikidata.org/wiki/Q130336568) (CC0) |
| Wikidata class | fortification |
| Types | high-rise bunker |
| Administrative area | Hamburg |
| Inception | 1942 |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 309 elements (outline 1, marker 16, road 322, building 269, wall 16, zone 5, retaining-wall 1).

Evidence: documented 0, mapped 309, inferred 0, derived 0; heights documented 98, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/849896397 historic=ruins Q2235765 447 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 269 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 322 mapped (trace size budget); minor lanes are not drawn
- origin moved 447 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.56191/9.96015) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; high-rise bunker; sitelinks=1; wikidata:Q130336568 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 309 elements); data/traces/hochbunker-im-florapark-q130336568.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
