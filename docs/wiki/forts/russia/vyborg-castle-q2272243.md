# Vyborg Castle

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vyborg-castle-q2272243` |
| Coordinates | 60.71583, 28.72889 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.71583/28.72889)) |
| Wikidata | [Q2272243](https://www.wikidata.org/wiki/Q2272243) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Vyborg |
| Inception | 1293 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 27 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://vyborgmuseum.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 10, road 305, building 26, coastline 11, wall 15, zone 23, retaining-wall 16, cliff 11, water 3).

Evidence: documented 0, mapped 266, inferred 0, derived 3; heights documented 27, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19317626 historic=castle Q2272243 32 m from ledger point
- island ring (18213 m2) cut out of sea-0
- roads capped: kept the 150 longest of 305 mapped (trace size budget); minor lanes are not drawn
- origin moved 30 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":402,"medianInside":11.2,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":483,"medianInside":11.9,"medianOutside":18.4}
- sea-2: DEM check failed {"cells":429,"medianInside":12,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.71583/28.72889) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=27; wikidata:Q2272243 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/vyborg-castle-q2272243.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
