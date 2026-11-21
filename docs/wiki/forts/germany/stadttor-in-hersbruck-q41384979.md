# Stadttor in Hersbruck

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadttor-in-hersbruck-q41384979` |
| Coordinates | 49.50946, 11.42777 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.50946/11.42777)) |
| Wikidata | [Q41384979](https://www.wikidata.org/wiki/Q41384979) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Hersbruck |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 1, road 203, waterway 7, zone 3, building 377, wall 7, water 1).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 99, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/291276295 historic=citywalls 254 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 377 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 203 mapped (trace size budget); minor lanes are not drawn
- origin moved 257 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.50946/11.42777) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q41384979 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/stadttor-in-hersbruck-q41384979.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
