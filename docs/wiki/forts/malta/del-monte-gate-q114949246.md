# Del Monte Gate

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `del-monte-gate-q114949246` |
| Coordinates | 35.89597, 14.51353 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.89597/14.51353)) |
| Wikidata | [Q114949246](https://www.wikidata.org/wiki/Q114949246) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Valletta |
| Inception | 1568 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 27, road 181, retaining-wall 3, building 72, wall 29, zone 9, coastline 2, water 3).

Evidence: documented 0, mapped 327, inferred 0, derived 1; heights documented 6, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1433725558 historic=fort 177 m from ledger point
- origin moved 171 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":109,"medianInside":0,"medianOutside":33.7}
- 12 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.89597/14.51353) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q114949246 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/del-monte-gate-q114949246.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
