# Fort George

> Croatia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-george-q112686578` |
| Coordinates | 43.07376, 16.19653 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.07376/16.19653)) |
| Wikidata | [Q112686578](https://www.wikidata.org/wiki/Q112686578) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Vis |
| Inception | 1812 |
| Designations | Register of Cultural Goods of Croatia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 23 elements (outline 1, road 10, building 4, coastline 2, wall 4, water 2).

Evidence: documented 0, mapped 23, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1079875626 historic=castle Q112686578 22 m from ledger point
- origin moved 25 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":72,"medianInside":0.2,"medianOutside":17.1}
- sea-1: DEM check ok {"cells":52,"medianInside":0,"medianOutside":15.7}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.07376/16.19653) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=2; wikidata:Q112686578 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 23 elements); data/traces/fort-george-q112686578.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/croatia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
