# The Maiden Tower

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `the-maiden-tower-q19784841` |
| Coordinates | 57.64631, 18.29556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.64631/18.29556)) |
| Wikidata | [Q19784841](https://www.wikidata.org/wiki/Q19784841) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower |
| Administrative area | Region Gotland |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 92 elements (outline 1, marker 1, road 37, building 42, coastline 1, zone 6, wall 3, water 1).

Evidence: documented 0, mapped 92, inferred 0, derived 1; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1111524902 historic=ruins Q19784841 1 m from ledger point
- sea-0: DEM check ok {"cells":157,"medianInside":0,"medianOutside":8.8}
- 34 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.64631/18.29556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower; sitelinks=1; wikidata:Q19784841 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/the-maiden-tower-q19784841.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
