# Torre del Candeliere

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-candeliere-q16335907` |
| Coordinates | 43.05137, 10.89045 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.05137/10.89045)) |
| Wikidata | [Q16335907](https://www.wikidata.org/wiki/Q16335907) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|military museum building\|museum of a public entity |
| Administrative area | Massa Marittima |
| Inception | 1228 |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 5, road 153, building 262, wall 35, retaining-wall 13, zone 3, cliff 1).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 102, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/568449095 historic=castle Q16335907 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 262 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.05137/10.89045) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|military museum building\|museum of a public entity; sitelinks=3; wikidata:Q16335907 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/torre-del-candeliere-q16335907.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
