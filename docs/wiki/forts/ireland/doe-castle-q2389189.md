# Doe Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `doe-castle-q2389189` |
| Coordinates | 55.13507, -7.86419 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.13507/-7.86419)) |
| Wikidata | [Q2389189](https://www.wikidata.org/wiki/Q2389189) (CC0) |
| Wikidata class | fortification |
| Types | tower house |
| Administrative area | County Donegal |
| Designations | national monument of Ireland |
| Wikipedia language editions | 11 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://heritageireland.ie/visit/places-to-visit/doe-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 22 elements (outline 1, road 5, retaining-wall 2, wall 8, coastline 1, building 4, water 1).

Evidence: documented 0, mapped 22, inferred 0, derived 1; heights documented 0, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1137365964 historic=castle Q2389189 1 m from ledger point
- sea-0: DEM check ok {"cells":869,"medianInside":2.5,"medianOutside":7.4}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.13507/-7.86419) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower house; sitelinks=11; wikidata:Q2389189 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 22 elements); data/traces/doe-castle-q2389189.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
