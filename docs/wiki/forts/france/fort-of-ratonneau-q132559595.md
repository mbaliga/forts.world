# Fort of Ratonneau

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-ratonneau-q132559595` |
| Coordinates | 43.28307, 5.31132 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.28307/5.31132)) |
| Wikidata | [Q132559595](https://www.wikidata.org/wiki/Q132559595) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Marseille |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 2, road 74, building 51, coastline 8, cliff 6, retaining-wall 11, wall 45, zone 11, water 5).

Evidence: documented 0, mapped 215, inferred 0, derived 5; heights documented 2, inferred 0, unknown 106.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28402290 historic=castle 28 m from ledger point
- origin moved 28 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":1,"medianInside":6.6,"medianOutside":9.6}
- sea-1: DEM check ok {"cells":122,"medianInside":0,"medianOutside":11.1}
- sea-2: DEM check ok {"cells":63,"medianInside":0,"medianOutside":10.5}
- sea-3: DEM check ok {"cells":6,"medianInside":3.2,"medianOutside":9.7}
- sea-4: DEM check ok {"cells":249,"medianInside":0,"medianOutside":11.9}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.28307/5.31132) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q132559595 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/fort-of-ratonneau-q132559595.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
