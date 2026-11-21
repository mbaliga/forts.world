# Real Felipe Fortress

> Peru · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `real-felipe-fortress-q2031014` |
| Coordinates | -12.06278, -77.14917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-12.06278/-77.14917)) |
| Wikidata | [Q2031014](https://www.wikidata.org/wiki/Q2031014) (CC0) |
| Wikidata class | fort |
| Types | convention center\|fortress |
| Administrative area | Callao |
| Designations | cultural heritage of Peru\|Tentative World Heritage Site |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 322 elements (outline 1, marker 9, road 298, building 295, zone 17, coastline 1, wall 22, water 2).

Evidence: documented 0, mapped 322, inferred 0, derived 2; heights documented 20, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32482219 historic=castle Q2031014 12 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 295 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 298 mapped (trace size budget); minor lanes are not drawn
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":19,"medianInside":1,"medianOutside":5.9}
- sea-1: DEM check ok {"cells":83,"medianInside":0.8,"medianOutside":6}
- 13 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-12.06278/-77.14917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; convention center\|fortress; sitelinks=8; wikidata:Q2031014 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 322 elements); data/traces/real-felipe-fortress-q2031014.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/peru.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
