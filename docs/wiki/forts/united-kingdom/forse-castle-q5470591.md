# Forse Castle

> United Kingdom · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forse-castle-q5470591` |
| Coordinates | 58.285, -3.325 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.285/-3.325)) |
| Wikidata | [Q5470591](https://www.wikidata.org/wiki/Q5470591) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `location-only`, 5 elements (coastline 2, road 1, water 2).

Evidence: documented 0, mapped 5, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":326,"medianInside":17,"medianOutside":17.8}
- sea-1: DEM check failed {"cells":400,"medianInside":17,"medianOutside":17}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.285/-3.325) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=5; wikidata:Q5470591 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/forse-castle-q5470591.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
