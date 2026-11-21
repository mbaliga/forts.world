# Carrickfergus Town Wall

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carrickfergus-town-wall-q122966600` |
| Coordinates | 54.71731, -5.80539 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.71731/-5.80539)) |
| Wikidata | [Q122966600](https://www.wikidata.org/wiki/Q122966600) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 196 elements (outline 1, marker 2, road 102, building 73, coastline 1, zone 15, water 2).

Evidence: documented 0, mapped 196, inferred 0, derived 2; heights documented 2, inferred 0, unknown 71.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7660311 historic=castle Q2368960 439 m from ledger point
- origin moved 432 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":52,"medianInside":1.7,"medianOutside":6.3}
- sea-1: DEM check failed {"cells":169,"medianInside":11.6,"medianOutside":5.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.71731/-5.80539) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q122966600 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 196 elements); data/traces/carrickfergus-town-wall-q122966600.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
