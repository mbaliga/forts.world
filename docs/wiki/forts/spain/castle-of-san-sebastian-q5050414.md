# Castle of San Sebastián

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-sebastian-q5050414` |
| Coordinates | 36.52825, -6.31598 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.52825/-6.31598)) |
| Wikidata | [Q5050414](https://www.wikidata.org/wiki/Q5050414) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Cádiz |
| Inception | 1706 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 11 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, marker 1, wall 6, road 9, building 11, zone 15, coastline 2, water 1).

Evidence: documented 0, mapped 46, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12380332 historic=fort Q5050414 78 m from ledger point
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3356,"medianInside":0,"medianOutside":3}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.52825/-6.31598) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=11; wikidata:Q5050414 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/castle-of-san-sebastian-q5050414.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
