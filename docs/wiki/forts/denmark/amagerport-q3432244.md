# Amagerport

> Denmark · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `amagerport-q3432244` |
| Coordinates | 55.6709, 12.5942 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.6709/12.5942)) |
| Wikidata | [Q3432244](https://www.wikidata.org/wiki/Q3432244) (CC0) |
| Wikidata class | fortification |
| Types | city gate\|destroyed building or structure |
| Administrative area | Copenhagen Municipality |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 251 elements (marker 3, road 149, building 85, water 3, coastline 3, zone 2, wall 5, waterway 1).

Evidence: documented 0, mapped 251, inferred 0, derived 1; heights documented 9, inferred 0, unknown 81.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":1,"medianInside":5.1,"medianOutside":4.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.6709/12.5942) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate\|destroyed building or structure; sitelinks=5; wikidata:Q3432244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 251 elements); data/traces/amagerport-q3432244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
