# Old Fortress

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-fortress-q3748715` |
| Coordinates | 43.55192, 10.30294 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.55192/10.30294)) |
| Wikidata | [Q3748715](https://www.wikidata.org/wiki/Q3748715) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Livorno |
| Designations | Italian national heritage |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 272 elements (outline 1, marker 1, road 357, building 86, zone 9, waterway 2, wall 11, coastline 3, water 8).

Evidence: documented 0, mapped 272, inferred 0, derived 5; heights documented 10, inferred 0, unknown 88.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1184806 historic=castle Q3748715 15 m from ledger point
- roads capped: kept the 150 longest of 357 mapped (trace size budget); minor lanes are not drawn
- origin moved 15 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":529,"medianInside":2.2,"medianOutside":null}
- sea-1: DEM check ok {"cells":26,"medianInside":0.1,"medianOutside":2.3}
- sea-2: DEM check ok {"cells":161,"medianInside":0,"medianOutside":2.8}
- sea-3: DEM check failed {"cells":487,"medianInside":2.3,"medianOutside":0.2}
- sea-4: DEM check ok {"cells":3,"medianInside":0,"medianOutside":2.2}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.55192/10.30294) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=9; wikidata:Q3748715 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 272 elements); data/traces/old-fortress-q3748715.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
