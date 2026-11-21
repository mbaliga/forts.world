# Marco Polo Battery

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marco-polo-battery-q113401327` |
| Coordinates | 45.32386, 12.32009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.32386/12.32009)) |
| Wikidata | [Q113401327](https://www.wikidata.org/wiki/Q113401327) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery |
| Administrative area | Venice |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | https://www.fortificazioni.net/forti/SAN_PIETRO_IN_VOLTA.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 88 elements (outline 1, road 18, water 7, wall 25, building 30, retaining-wall 2, coastline 1, zone 4).

Evidence: documented 0, mapped 88, inferred 0, derived 1; heights documented 0, inferred 0, unknown 57.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152544357 historic=castle 23 m from ledger point
- origin moved 23 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":87,"medianInside":0,"medianOutside":-0.3}
- 23 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.32386/12.32009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery; sitelinks=0; wikidata:Q113401327 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 88 elements); data/traces/marco-polo-battery-q113401327.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
