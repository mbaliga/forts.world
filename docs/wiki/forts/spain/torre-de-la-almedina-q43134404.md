# Torre de la Almedina

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-la-almedina-q43134404` |
| Coordinates | 36.01196, -5.6009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.01196/-5.6009)) |
| Wikidata | [Q43134404](https://www.wikidata.org/wiki/Q43134404) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Tarifa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 6, road 229, building 229, zone 12, wall 30, waterway 2, retaining-wall 6, water 4, coastline 4).

Evidence: documented 0, mapped 335, inferred 0, derived 2; heights documented 111, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1155614956 historic=castle 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 229 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 229 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":79,"medianInside":0,"medianOutside":14.8}
- sea-1: DEM check ok {"cells":3,"medianInside":2.8,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.01196/-5.6009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q43134404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/torre-de-la-almedina-q43134404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
