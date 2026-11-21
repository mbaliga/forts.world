# Ramparts of Bonifacio

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ramparts-of-bonifacio-q54556551` |
| Coordinates | 41.38753, 9.15507 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38753/9.15507)) |
| Wikidata | [Q54556551](https://www.wikidata.org/wiki/Q54556551) (CC0) |
| Wikidata class | fortification |
| Types | rampart |
| Administrative area | Bonifacio |
| Designations | monument selected by the mission to identify immovable heritage in danger (2018) |
| Wikipedia language editions | 0 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, marker 2, zone 2, road 78, coastline 3, building 9, wall 1, cliff 2, water 1).

Evidence: documented 0, mapped 99, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/300349266 historic=fort 522 m from ledger point
- origin moved 522 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":275,"medianInside":0,"medianOutside":27.1}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38753/9.15507) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; rampart; sitelinks=0; wikidata:Q54556551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/ramparts-of-bonifacio-q54556551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
