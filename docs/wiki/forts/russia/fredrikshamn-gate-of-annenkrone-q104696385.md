# Fredrikshamn Gate of Annenkrone

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fredrikshamn-gate-of-annenkrone-q104696385` |
| Coordinates | 60.71889, 28.72361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.71889/28.72361)) |
| Wikidata | [Q104696385](https://www.wikidata.org/wiki/Q104696385) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural landmark |
| Administrative area | Vyborg |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://vyborgmuseum.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 396 elements (outline 1, marker 10, road 287, building 24, coastline 11, wall 14, zone 22, retaining-wall 14, cliff 10, water 3).

Evidence: documented 0, mapped 396, inferred 0, derived 3; heights documented 24, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19317626 historic=castle Q2272243 442 m from ledger point
- island ring (18213 m2) cut out of sea-0
- origin moved 437 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":402,"medianInside":11.2,"medianOutside":20.1}
- sea-1: DEM check failed {"cells":483,"medianInside":11.9,"medianOutside":18.4}
- sea-2: DEM check failed {"cells":429,"medianInside":12,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.71889/28.72361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural landmark; sitelinks=3; wikidata:Q104696385 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 396 elements); data/traces/fredrikshamn-gate-of-annenkrone-q104696385.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
