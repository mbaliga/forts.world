# Perellos Redoubt

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `perellos-redoubt-q20667107` |
| Coordinates | 35.94947, 14.4235 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.94947/14.4235)) |
| Wikidata | [Q20667107](https://www.wikidata.org/wiki/Q20667107) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | St. Paul's Bay |
| Inception | 1715 |
| Designations | Grade 2 |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 70 elements (road 44, waterway 1, water 5, building 9, coastline 2, wall 7, zone 2).

Evidence: documented 0, mapped 70, inferred 0, derived 3; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":399,"medianInside":8.6,"medianOutside":4.3}
- sea-1: DEM check failed {"cells":335,"medianInside":16.7,"medianOutside":0.2}
- sea-2: DEM check ok {"cells":168,"medianInside":0,"medianOutside":21.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.94947/14.4235) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=2; wikidata:Q20667107 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 70 elements); data/traces/perellos-redoubt-q20667107.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
