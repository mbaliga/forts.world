# Burg Fischhausen

> Russia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `burg-fischhausen-q134821668` |
| Coordinates | 54.72758, 20.00915 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.72758/20.00915)) |
| Wikidata | [Q134821668](https://www.wikidata.org/wiki/Q134821668) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 32 elements (marker 1, road 12, building 14, waterway 2, coastline 1, water 2).

Evidence: documented 0, mapped 32, inferred 0, derived 2; heights documented 10, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":8,"medianInside":3,"medianOutside":0.8}
- sea-1: DEM check failed {"cells":53,"medianInside":3,"medianOutside":0.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.72758/20.00915) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q134821668 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/burg-fischhausen-q134821668.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
