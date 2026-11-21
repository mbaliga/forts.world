# Battery of Caveaux

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `battery-of-caveaux-q132732510` |
| Coordinates | 43.26482, 5.28988 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.26482/5.28988)) |
| Wikidata | [Q132732510](https://www.wikidata.org/wiki/Q132732510) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Marseille |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, road 27, coastline 1, wall 24, retaining-wall 22, building 11, cliff 11, water 4).

Evidence: documented 0, mapped 101, inferred 0, derived 4; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/229715448 historic=castle 31 m from ledger point
- origin moved 31 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":25,"medianInside":0,"medianOutside":22.3}
- sea-1: DEM check ok {"cells":25,"medianInside":0,"medianOutside":22.3}
- sea-2: DEM check failed {"cells":8,"medianInside":15,"medianOutside":21.9}
- sea-3: DEM check failed {"cells":6,"medianInside":21.6,"medianOutside":21.8}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.26482/5.28988) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q132732510 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/battery-of-caveaux-q132732510.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
