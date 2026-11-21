# Tsukurōmi Castle

> Japan · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tsukuromi-castle-q11639759` |
| Coordinates | 35.20556, 139.83983 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.20556/139.83983)) |
| Wikidata | [Q11639759](https://www.wikidata.org/wiki/Q11639759) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Futtsu |
| Inception | 1461 |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 48 elements (marker 1, coastline 2, road 10, building 34, water 1).

Evidence: documented 0, mapped 48, inferred 0, derived 1; heights documented 2, inferred 0, unknown 32.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check failed {"cells":29,"medianInside":12,"medianOutside":52.3}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.20556/139.83983) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11639759 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 48 elements); data/traces/tsukuromi-castle-q11639759.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
