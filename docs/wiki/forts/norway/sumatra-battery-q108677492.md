# Sumatra Battery

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sumatra-battery-q108677492` |
| Coordinates | 58.10288, 7.98625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.10288/7.98625)) |
| Wikidata | [Q108677492](https://www.wikidata.org/wiki/Q108677492) (CC0) |
| Wikidata class | fortification |
| Types | cultural property\|artillery battery |
| Administrative area | Kristiansand Municipality |
| Designations | cultural heritage preservation in Norway |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 63 elements (marker 2, road 10, coastline 10, building 34, water 7).

Evidence: documented 0, mapped 63, inferred 0, derived 7; heights documented 1, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":1,"medianInside":0.2,"medianOutside":3.2}
- sea-1: DEM check ok {"cells":1,"medianInside":0.2,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":110,"medianInside":2,"medianOutside":3.5}
- sea-3: DEM check ok {"cells":4,"medianInside":0.1,"medianOutside":3.2}
- sea-4: DEM check failed {"cells":399,"medianInside":3.3,"medianOutside":0.2}
- sea-5: DEM check ok {"cells":4,"medianInside":0.1,"medianOutside":3.2}
- sea-6: DEM check ok {"cells":330,"medianInside":3,"medianOutside":3.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.10288/7.98625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural property\|artillery battery; sitelinks=0; wikidata:Q108677492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 63 elements); data/traces/sumatra-battery-q108677492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
