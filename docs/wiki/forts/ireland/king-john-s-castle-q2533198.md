# King John's Castle

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `king-john-s-castle-q2533198` |
| Coordinates | 52.66972, -8.62556 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.66972/-8.62556)) |
| Wikidata | [Q2533198](https://www.wikidata.org/wiki/Q2533198) (CC0) |
| Wikidata class | castle |
| Types | castle\|military museum |
| Administrative area | Limerick |
| Inception | 1210 |
| Designations | national monument of Ireland |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 2 |
| OSM `website` | https://kingjohnscastle.ie |

## What the model contains

Tier **T1**, status `outline+walls`, 337 elements (outline 1, marker 8, road 94, building 205, zone 13, wall 13, waterway 3).

Evidence: documented 0, mapped 337, inferred 0, derived 0; heights documented 51, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1304392 historic=castle Q2533198 15 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.66972/-8.62556) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|military museum; sitelinks=17; wikidata:Q2533198 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 337 elements); data/traces/king-john-s-castle-q2533198.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
