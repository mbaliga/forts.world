# Castle of Damouchari

> Greece · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-damouchari-q109686833` |
| Coordinates | 39.40475, 23.18119 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.40475/23.18119)) |
| Wikidata | [Q109686833](https://www.wikidata.org/wiki/Q109686833) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Zagora-Mouresi Municipality |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 67 elements (marker 1, road 27, coastline 3, building 25, waterway 1, cliff 3, zone 5, water 2).

Evidence: documented 0, mapped 67, inferred 0, derived 2; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- island ring (515 m2) cut out of sea-0
- sea-0: DEM check failed {"cells":398,"medianInside":4.2,"medianOutside":0}
- sea-1: DEM check ok {"cells":183,"medianInside":0,"medianOutside":15.5}
- 7 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.40475/23.18119) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q109686833 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 67 elements); data/traces/castle-of-damouchari-q109686833.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
