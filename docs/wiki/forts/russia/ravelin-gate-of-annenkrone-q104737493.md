# Ravelin Gate of Annenkrone

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ravelin-gate-of-annenkrone-q104737493` |
| Coordinates | 60.72, 28.72278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.72/28.72278)) |
| Wikidata | [Q104737493](https://www.wikidata.org/wiki/Q104737493) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|architectural landmark |
| Administrative area | Vyborg |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | http://vyborgmuseum.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 190 elements (outline 1, marker 8, road 137, building 13, coastline 8, wall 9, zone 7, retaining-wall 2, cliff 3, water 2).

Evidence: documented 0, mapped 190, inferred 0, derived 2; heights documented 11, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19317626 historic=castle Q2272243 569 m from ledger point
- island ring (18213 m2) cut out of sea-0
- origin moved 565 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":438,"medianInside":11.6,"medianOutside":18.1}
- sea-1: DEM check failed {"cells":429,"medianInside":12,"medianOutside":12.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.72/28.72278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|architectural landmark; sitelinks=3; wikidata:Q104737493 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 190 elements); data/traces/ravelin-gate-of-annenkrone-q104737493.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
