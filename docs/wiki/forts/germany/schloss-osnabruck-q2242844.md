# Schloss Osnabrück

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-osnabruck-q2242844` |
| Coordinates | 52.27155, 8.04419 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.27155/8.04419)) |
| Wikidata | [Q2242844](https://www.wikidata.org/wiki/Q2242844) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|château\|royal palace |
| Administrative area | Osnabrück |
| Inception | 1667 |
| Designations | architectural heritage monument in Lower Saxony |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 324 elements (outline 1, marker 4, road 312, building 129, zone 22, wall 20, waterway 1, retaining-wall 6).

Evidence: documented 0, mapped 324, inferred 0, derived 0; heights documented 51, inferred 0, unknown 95.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/164770 historic=castle Q2242844 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 129 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 312 mapped (trace size budget); minor lanes are not drawn
- origin moved 9 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.27155/8.04419) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|château\|royal palace; sitelinks=4; wikidata:Q2242844 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 324 elements); data/traces/schloss-osnabruck-q2242844.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
