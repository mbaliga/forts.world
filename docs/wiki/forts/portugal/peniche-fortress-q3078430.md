# Peniche Fortress

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `peniche-fortress-q3078430` |
| Coordinates | 39.3528, -9.38111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.3528/-9.38111)) |
| Wikidata | [Q3078430](https://www.wikidata.org/wiki/Q3078430) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|prison\|fort |
| Administrative area | Peniche |
| Inception | 1558 |
| Designations | National Monument of Portugal |
| Wikipedia language editions | 7 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 4, road 197, water 6, wall 27, coastline 8, zone 30, building 235, retaining-wall 13, waterway 1, cliff 4).

Evidence: documented 0, mapped 365, inferred 0, derived 2; heights documented 72, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/411115833 historic=citywalls 112 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 235 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 197 mapped (trace size budget); minor lanes are not drawn
- origin moved 112 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":404,"medianInside":0,"medianOutside":9.8}
- sea-1: DEM check ok {"cells":39,"medianInside":1.5,"medianOutside":6.5}
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.3528/-9.38111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|prison\|fort; sitelinks=7; wikidata:Q3078430 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 365 elements); data/traces/peniche-fortress-q3078430.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
