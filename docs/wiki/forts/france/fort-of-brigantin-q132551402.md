# Fort of Brigantin

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-brigantin-q132551402` |
| Coordinates | 43.28054, 5.29337 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.28054/5.29337)) |
| Wikidata | [Q132551402](https://www.wikidata.org/wiki/Q132551402) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Marseille |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 146 elements (outline 1, marker 3, road 24, coastline 3, building 23, retaining-wall 31, zone 2, wall 45, cliff 11, water 3).

Evidence: documented 0, mapped 146, inferred 0, derived 3; heights documented 0, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28401058 historic=castle 2 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":4,"medianInside":0,"medianOutside":0}
- sea-1: DEM check ok {"cells":254,"medianInside":0,"medianOutside":5.1}
- sea-2: DEM check failed {"cells":400,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.28054/5.29337) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=1; wikidata:Q132551402 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 146 elements); data/traces/fort-of-brigantin-q132551402.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
