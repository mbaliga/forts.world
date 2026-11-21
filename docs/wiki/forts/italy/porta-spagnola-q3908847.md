# Porta Spagnola

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-spagnola-q3908847` |
| Coordinates | 37.23575, 15.22007 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.23575/15.22007)) |
| Wikidata | [Q3908847](https://www.wikidata.org/wiki/Q3908847) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Augusta |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 171 elements (outline 1, marker 4, road 61, building 50, wall 39, coastline 2, retaining-wall 11, zone 1, water 2).

Evidence: documented 0, mapped 171, inferred 0, derived 2; heights documented 37, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7410169 historic=castle Q1048844 147 m from ledger point
- origin moved 147 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":4,"medianInside":-0.1,"medianOutside":7.6}
- sea-1: DEM check ok {"cells":1,"medianInside":-0.2,"medianOutside":7.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.23575/15.22007) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=5; wikidata:Q3908847 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 171 elements); data/traces/porta-spagnola-q3908847.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
