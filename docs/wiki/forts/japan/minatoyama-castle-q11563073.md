# Minatoyama Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `minatoyama-castle-q11563073` |
| Coordinates | 33.8687, 132.7109 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.8687/132.7109)) |
| Wikidata | [Q11563073](https://www.wikidata.org/wiki/Q11563073) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Matsuyama |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 69 elements (marker 1, coastline 3, road 31, building 32, water 2).

Evidence: documented 0, mapped 69, inferred 0, derived 2; heights documented 0, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":182,"medianInside":2.3,"medianOutside":6.2}
- sea-1: DEM check failed {"cells":390,"medianInside":5,"medianOutside":4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.8687/132.7109) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11563073 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 69 elements); data/traces/minatoyama-castle-q11563073.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
