# Inuo Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `inuo-castle-q85882308` |
| Coordinates | 33.27456, 132.53819 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.27456/132.53819)) |
| Wikidata | [Q85882308](https://www.wikidata.org/wiki/Q85882308) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 96 elements (marker 1, waterway 1, coastline 1, road 16, water 3, building 74).

Evidence: documented 0, mapped 96, inferred 0, derived 2; heights documented 1, inferred 0, unknown 73.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":394,"medianInside":43.5,"medianOutside":5.5}
- sea-1: DEM check ok {"cells":10,"medianInside":2.9,"medianOutside":41.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.27456/132.53819) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q85882308 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 96 elements); data/traces/inuo-castle-q85882308.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
