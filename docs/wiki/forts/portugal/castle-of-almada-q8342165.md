# Castle of Almada

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-almada-q8342165` |
| Coordinates | 38.68444, -9.15556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.68444/-9.15556)) |
| Wikidata | [Q8342165](https://www.wikidata.org/wiki/Q8342165) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Almada |
| Wikipedia language editions | 4 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 3, road 117, building 256, wall 67, coastline 8, retaining-wall 5, cliff 4, zone 1, water 1).

Evidence: documented 0, mapped 327, inferred 0, derived 1; heights documented 2, inferred 0, unknown 190.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9681528 historic=citywalls Q8342165 43 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 256 mapped (trace size budget); the rest of the town is not drawn
- origin moved 42 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":96,"medianInside":0,"medianOutside":53.7}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.68444/-9.15556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q8342165 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/castle-of-almada-q8342165.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
