# Storchenturm Lahr

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `storchenturm-lahr-q2352086` |
| Coordinates | 48.3394, 7.87222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.3394/7.87222)) |
| Wikidata | [Q2352086](https://www.wikidata.org/wiki/Q2352086) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Lahr/Schwarzwald |
| Designations | cultural heritage monument in Baden-Württemberg |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 13, road 267, building 315, waterway 6, wall 10, retaining-wall 15, zone 7, water 2).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 11, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/569342703 historic=castle Q2352086 44 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 315 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 267 mapped (trace size budget); minor lanes are not drawn
- origin moved 44 m from the ledger point to the centre of the mapped site
- 19 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.3394/7.87222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=3; wikidata:Q2352086 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/storchenturm-lahr-q2352086.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
