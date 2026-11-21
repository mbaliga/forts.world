# Castello di Capo d'Orlando

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-capo-d-orlando-q111520806` |
| Coordinates | 38.16421, 14.7486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.16421/14.7486)) |
| Wikidata | [Q111520806](https://www.wikidata.org/wiki/Q111520806) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Capo d'Orlando |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `location-only`, 184 elements (marker 1, road 58, coastline 2, building 84, retaining-wall 14, zone 1, water 2, wall 22).

Evidence: documented 0, mapped 184, inferred 0, derived 1; heights documented 75, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (507 m2) cut out of sea-0
- sea-0: DEM check ok {"cells":61,"medianInside":0.1,"medianOutside":17.8}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.16421/14.7486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q111520806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 184 elements); data/traces/castello-di-capo-d-orlando-q111520806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
