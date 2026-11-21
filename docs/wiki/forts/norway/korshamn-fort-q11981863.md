# Korshamn Fort

> Norway · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `korshamn-fort-q11981863` |
| Coordinates | 68.4154, 16.5656 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/68.4154/16.5656)) |
| Wikidata | [Q11981863](https://www.wikidata.org/wiki/Q11981863) (CC0) |
| Wikidata class | fortification |
| Types | torpedo battery |
| Administrative area | Ballangen Municipality |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `location-only`, 20 elements (marker 1, road 7, coastline 6, waterway 1, building 4, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":213,"medianInside":0,"medianOutside":8.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/68.4154/16.5656) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; torpedo battery; sitelinks=2; wikidata:Q11981863 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/korshamn-fort-q11981863.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/norway.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
