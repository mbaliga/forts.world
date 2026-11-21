# St. Mary's Tower

> Malta · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-mary-s-tower-q1345155` |
| Coordinates | 36.00694, 14.32944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.00694/14.32944)) |
| Wikidata | [Q1345155](https://www.wikidata.org/wiki/Q1345155) (CC0) |
| Wikidata class | fortification |
| Types | Wignacourt towers |
| Administrative area | Għajnsielem |
| Inception | 1618 |
| Designations | Grade 1 |
| Wikipedia language editions | 10 |

## What the model contains

Tier **T1**, status `location-only`, 31 elements (coastline 2, building 10, road 8, zone 1, wall 7, cliff 1, water 2).

Evidence: documented 0, mapped 31, inferred 0, derived 2; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":397,"medianInside":0,"medianOutside":38.7}
- sea-1: DEM check failed {"cells":1595,"medianInside":32.7,"medianOutside":31.4}
- 139 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.00694/14.32944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Wignacourt towers; sitelinks=10; wikidata:Q1345155 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 31 elements); data/traces/st-mary-s-tower-q1345155.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
