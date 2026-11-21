# Tower of the Poméguet

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tower-of-the-pomeguet-q132559579` |
| Coordinates | 43.27124, 5.29978 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.27124/5.29978)) |
| Wikidata | [Q132559579](https://www.wikidata.org/wiki/Q132559579) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Marseille |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, building 4, road 20, coastline 4, retaining-wall 6, wall 3, cliff 2, water 5).

Evidence: documented 0, mapped 45, inferred 0, derived 5; heights documented 3, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/110194305 historic=fort 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":40,"medianInside":0,"medianOutside":6.9}
- sea-1: DEM check ok {"cells":4,"medianInside":0,"medianOutside":5.8}
- sea-2: DEM check ok {"cells":8,"medianInside":0,"medianOutside":5.9}
- sea-3: DEM check failed {"cells":386,"medianInside":6.9,"medianOutside":0}
- sea-4: DEM check ok {"cells":95,"medianInside":0,"medianOutside":7.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.27124/5.29978) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q132559579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/tower-of-the-pomeguet-q132559579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
