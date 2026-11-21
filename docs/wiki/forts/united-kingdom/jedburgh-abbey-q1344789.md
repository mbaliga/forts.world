# Jedburgh Abbey

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jedburgh-abbey-q1344789` |
| Coordinates | 55.47663, -2.55482 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.47663/-2.55482)) |
| Wikidata | [Q1344789](https://www.wikidata.org/wiki/Q1344789) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|abbey\|abbey |
| Administrative area | Scottish Borders |
| Inception | 1101 |
| Wikipedia language editions | 11 |
| OSM `historic` | ruins |
| OSM `ruins` | abbey |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 16, road 235, building 209, zone 12, water 4, waterway 3, retaining-wall 6, wall 13).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 27, inferred 0, unknown 112.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8192556 historic=ruins Q1344789 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 209 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 235 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.47663/-2.55482) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|abbey\|abbey; sitelinks=11; wikidata:Q1344789 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/jedburgh-abbey-q1344789.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
