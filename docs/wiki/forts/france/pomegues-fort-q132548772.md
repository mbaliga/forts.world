# Pomègues Fort

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pomegues-fort-q132548772` |
| Coordinates | 43.27455, 5.30781 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.27455/5.30781)) |
| Wikidata | [Q132548772](https://www.wikidata.org/wiki/Q132548772) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Marseille |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 69 elements (outline 1, road 21, wall 23, building 4, coastline 4, cliff 2, retaining-wall 7, zone 2, water 5).

Evidence: documented 0, mapped 69, inferred 0, derived 5; heights documented 0, inferred 0, unknown 34.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18505752 historic=castle 42 m from ledger point
- origin moved 44 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":6,"medianInside":0.1,"medianOutside":13.2}
- sea-1: DEM check ok {"cells":5,"medianInside":-0.4,"medianOutside":13.1}
- sea-2: DEM check ok {"cells":13,"medianInside":-0.2,"medianOutside":14}
- sea-3: DEM check ok {"cells":14,"medianInside":0.2,"medianOutside":14}
- sea-4: DEM check ok {"cells":145,"medianInside":0,"medianOutside":20.7}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.27455/5.30781) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q132548772 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 69 elements); data/traces/pomegues-fort-q132548772.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
