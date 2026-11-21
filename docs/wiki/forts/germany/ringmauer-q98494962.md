# Ringmauer

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ringmauer-q98494962` |
| Coordinates | 50.02732, 9.79662 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.02732/9.79662)) |
| Wikidata | [Q98494962](https://www.wikidata.org/wiki/Q98494962) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Gössenheim |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 73 elements (outline 1, marker 1, road 51, zone 7, waterway 2, building 5, wall 5, retaining-wall 1).

Evidence: documented 0, mapped 73, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28679190 historic=castle Q1625875 10 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- 14 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.02732/9.79662) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=0; wikidata:Q98494962 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 73 elements); data/traces/ringmauer-q98494962.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
