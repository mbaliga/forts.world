# Flakturm IV

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `flakturm-iv-q81332733` |
| Coordinates | 53.55639, 9.97 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.55639/9.97)) |
| Wikidata | [Q81332733](https://www.wikidata.org/wiki/Q81332733) (CC0) |
| Wikidata class | fortification |
| Types | flak tower |
| Administrative area | Hamburg-Mitte |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 301 elements (outline 1, marker 11, road 288, building 193, wall 13, zone 5, retaining-wall 1).

Evidence: documented 0, mapped 301, inferred 0, derived 0; heights documented 96, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/849896399 historic=ruins 573 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 193 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 288 mapped (trace size budget); minor lanes are not drawn
- origin moved 573 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.55639/9.97) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; flak tower; sitelinks=4; wikidata:Q81332733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 301 elements); data/traces/flakturm-iv-q81332733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
