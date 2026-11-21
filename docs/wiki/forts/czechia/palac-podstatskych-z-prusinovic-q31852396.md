# Palác Podstatských z Prusinovic

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palac-podstatskych-z-prusinovic-q31852396` |
| Coordinates | 49.59394, 17.25292 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.59394/17.25292)) |
| Wikidata | [Q31852396](https://www.wikidata.org/wiki/Q31852396) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Olomouc |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 390 elements (outline 1, marker 43, road 256, building 413, zone 8, waterway 1, wall 59, retaining-wall 7, water 1).

Evidence: documented 0, mapped 390, inferred 0, derived 0; heights documented 81, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/52937563 historic=castle Q31852396 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 413 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 256 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.59394/17.25292) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=2; wikidata:Q31852396 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 390 elements); data/traces/palac-podstatskych-z-prusinovic-q31852396.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
