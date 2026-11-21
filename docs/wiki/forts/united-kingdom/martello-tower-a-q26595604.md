# Martello Tower A

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `martello-tower-a-q26595604` |
| Coordinates | 51.80102, 1.01976 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.80102/1.01976)) |
| Wikidata | [Q26595604](https://www.wikidata.org/wiki/Q26595604) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | St Osyth |
| Inception | 1809 |
| Designations | Grade II listed building |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 123 elements (road 45, coastline 2, waterway 2, water 6, building 65, wall 3).

Evidence: documented 0, mapped 123, inferred 0, derived 4; heights documented 0, inferred 0, unknown 68.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":1,"medianInside":1,"medianOutside":1.8}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":1.8}
- sea-2: DEM check failed {"cells":22,"medianInside":1.9,"medianOutside":1.8}
- sea-3: DEM check ok {"cells":118,"medianInside":-0.3,"medianOutside":1.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.80102/1.01976) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=2; wikidata:Q26595604 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 123 elements); data/traces/martello-tower-a-q26595604.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
