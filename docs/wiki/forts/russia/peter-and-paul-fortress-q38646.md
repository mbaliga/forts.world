# Peter and Paul Fortress

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peter-and-paul-fortress-q38646` |
| Coordinates | 59.95, 30.31667 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.95/30.31667)) |
| Wikidata | [Q38646](https://www.wikidata.org/wiki/Q38646) (CC0) |
| Wikidata class | fort |
| Types | fortress\|citadel\|architectural landmark\|military museum |
| Administrative area | Petrogradsky District |
| Inception | 1703 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 53 |
| OSM `historic` | castle |
| OSM `castle_type` | citadel |
| OSM `description` | Original citadel of St. Petersburg, founded by OPeter the Great in 1703 |
| OSM `website` | https://www.spbmuseum.ru/themuseum/museum_complex/peterpaul_fortress/ |

## What the model contains

Tier **T1**, status `outline+walls`, 340 elements (outline 1, marker 61, waterway 6, road 462, building 54, zone 44, water 1, wall 11, retaining-wall 12).

Evidence: documented 0, mapped 340, inferred 0, derived 0; heights documented 33, inferred 0, unknown 44.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/227969 historic=castle Q38646 42 m from ledger point
- roads capped: kept the 150 longest of 462 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.95/30.31667) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|citadel\|architectural landmark\|military museum; sitelinks=53; wikidata:Q38646 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 340 elements); data/traces/peter-and-paul-fortress-q38646.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
