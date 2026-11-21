# Campo do Castro

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `campo-do-castro-q61388572` |
| Coordinates | 43.66067, -8.07218 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.66067/-8.07218)) |
| Wikidata | [Q61388572](https://www.wikidata.org/wiki/Q61388572) (CC0) |
| Wikidata class | fort |
| Types | hillfort |
| Administrative area | Cedeira, Cedeira |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 27 elements (outline 1, coastline 2, road 11, building 7, retaining-wall 1, water 5).

Evidence: documented 0, mapped 27, inferred 0, derived 5; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/971244054 historic=archaeological_site Q61388572 12 m from ledger point
- origin moved 12 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":79,"medianInside":0,"medianOutside":25.8}
- sea-1: DEM check ok {"cells":3,"medianInside":0,"medianOutside":18.8}
- sea-2: DEM check ok {"cells":1,"medianInside":-0.1,"medianOutside":18.3}
- sea-3: DEM check ok {"cells":7,"medianInside":0.4,"medianOutside":19.3}
- sea-4: DEM check ok {"cells":1,"medianInside":4.8,"medianOutside":18.3}
- 58 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.66067/-8.07218) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort; sitelinks=1; wikidata:Q61388572 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 27 elements); data/traces/campo-do-castro-q61388572.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
