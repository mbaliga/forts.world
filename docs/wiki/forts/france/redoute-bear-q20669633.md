# Redoute Béar

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoute-bear-q20669633` |
| Coordinates | 42.51885, 3.11486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.51885/3.11486)) |
| Wikidata | [Q20669633](https://www.wikidata.org/wiki/Q20669633) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Port-Vendres |
| Inception | 1694 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 194 elements (outline 1, marker 3, coastline 1, road 34, building 142, wall 3, retaining-wall 3, waterway 1, zone 1, water 5).

Evidence: documented 0, mapped 194, inferred 0, derived 5; heights documented 3, inferred 0, unknown 145.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/64234176 historic=castle Q20669633 18 m from ledger point
- origin moved 18 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":176,"medianInside":0,"medianOutside":8.7}
- sea-2: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- sea-3: DEM check failed {"cells":399,"medianInside":0,"medianOutside":0}
- sea-4: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.51885/3.11486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q20669633 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 194 elements); data/traces/redoute-bear-q20669633.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
