# Zytglogge

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `zytglogge-q246105` |
| Coordinates | 46.94806, 7.44778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.94806/7.44778)) |
| Wikidata | [Q246105](https://www.wikidata.org/wiki/Q246105) (CC0) |
| Wikidata class | fortification |
| Types | astronomical clock\|carillon\|city gate\|gate tower\|clock tower\|architectural landmark |
| Administrative area | Bern |
| Inception | 1220 |
| Designations | class A Swiss cultural property of national significance |
| Wikipedia language editions | 25 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 302 elements (outline 1, marker 1, road 323, building 280, zone 5, wall 6, retaining-wall 6, waterway 12, water 1).

Evidence: documented 0, mapped 302, inferred 0, derived 0; heights documented 2, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/41808321 historic=building Q1784541 93 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 280 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 323 mapped (trace size budget); minor lanes are not drawn
- origin moved 93 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.94806/7.44778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; astronomical clock\|carillon\|city gate\|gate tower\|clock tower\|architectural landmark; sitelinks=25; wikidata:Q246105 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 302 elements); data/traces/zytglogge-q246105.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
