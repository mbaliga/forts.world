# Forte de São João Baptista

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-sao-joao-baptista-q76957433` |
| Coordinates | 32.86729, -17.16543 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.86729/-17.16543)) |
| Wikidata | [Q76957433](https://www.wikidata.org/wiki/Q76957433) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Porto Moniz |
| Designations | heritage without legal protection |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 187 elements (outline 1, road 114, coastline 3, building 45, zone 13, wall 5, water 6).

Evidence: documented 0, mapped 187, inferred 0, derived 4; heights documented 0, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/780942118 historic=fort Q76957433 3 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":396,"medianInside":0.2,"medianOutside":0}
- sea-1: DEM check ok {"cells":47,"medianInside":0,"medianOutside":0.2}
- sea-2: DEM check ok {"cells":174,"medianInside":0,"medianOutside":5.4}
- sea-3: DEM check failed {"cells":400,"medianInside":0.2,"medianOutside":0}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.86729/-17.16543) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=1; wikidata:Q76957433 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 187 elements); data/traces/forte-de-sao-joao-baptista-q76957433.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
