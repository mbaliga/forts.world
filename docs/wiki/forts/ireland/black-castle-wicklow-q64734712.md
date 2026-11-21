# Black Castle, Wicklow

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `black-castle-wicklow-q64734712` |
| Coordinates | 52.9811, -6.03075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.9811/-6.03075)) |
| Wikidata | [Q64734712](https://www.wikidata.org/wiki/Q64734712) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | County Wicklow |
| Designations | Archaeological Survey of Ireland |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 126 elements (outline 1, marker 3, coastline 4, road 25, building 65, wall 26, water 2).

Evidence: documented 0, mapped 126, inferred 0, derived 2; heights documented 0, inferred 0, unknown 91.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1220572525 historic=castle Q64734712 7 m from ledger point
- origin moved 5 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":226,"medianInside":4.6,"medianOutside":9.8}
- sea-1: DEM check failed {"cells":17,"medianInside":17,"medianOutside":6.8}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.9811/-6.03075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=2; wikidata:Q64734712 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 126 elements); data/traces/black-castle-wicklow-q64734712.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
