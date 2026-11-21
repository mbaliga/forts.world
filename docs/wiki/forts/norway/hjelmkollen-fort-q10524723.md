# Hjelmkollen fort

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hjelmkollen-fort-q10524723` |
| Coordinates | 59.10083, 11.27611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.10083/11.27611)) |
| Wikidata | [Q10524723](https://www.wikidata.org/wiki/Q10524723) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Halden |
| Designations | cultural property |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 45 elements (marker 1, coastline 4, road 15, waterway 1, building 16, water 4, cliff 4).

Evidence: documented 0, mapped 45, inferred 0, derived 3; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":2,"medianInside":2,"medianOutside":59.3}
- sea-1: DEM check ok {"cells":6,"medianInside":0.2,"medianOutside":60}
- sea-2: DEM check ok {"cells":11,"medianInside":0.3,"medianOutside":60.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.10083/11.27611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=3; wikidata:Q10524723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/hjelmkollen-fort-q10524723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
