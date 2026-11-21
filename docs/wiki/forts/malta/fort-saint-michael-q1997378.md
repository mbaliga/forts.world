# Fort Saint Michael

> Malta · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-michael-q1997378` |
| Coordinates | 35.88469, 14.51905 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.88469/14.51905)) |
| Wikidata | [Q1997378](https://www.wikidata.org/wiki/Q1997378) (CC0) |
| Wikidata class | fort |
| Types | fort\|cavalier |
| Administrative area | Senglea |
| Inception | 1552 |
| Designations | Grade 1 |
| Wikipedia language editions | 12 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 358 elements (outline 1, marker 6, road 154, wall 60, building 166, coastline 1, retaining-wall 4, zone 14, water 1).

Evidence: documented 0, mapped 358, inferred 0, derived 1; heights documented 98, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/691730690 historic=citywalls 405 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 166 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 403 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":6,"medianInside":9.8,"medianOutside":23.4}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.88469/14.51905) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cavalier; sitelinks=12; wikidata:Q1997378 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 358 elements); data/traces/fort-saint-michael-q1997378.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/malta.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
