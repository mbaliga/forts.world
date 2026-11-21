# Heugh Battery Museum

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `heugh-battery-museum-q12059992` |
| Coordinates | 54.6972, -1.17654 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.6972/-1.17654)) |
| Wikidata | [Q12059992](https://www.wikidata.org/wiki/Q12059992) (CC0) |
| Wikidata class | fortification |
| Types | artillery battery\|military museum\|independent museum |
| Administrative area | Headland |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 388 elements (outline 1, marker 4, road 108, zone 14, wall 6, building 250, coastline 2, retaining-wall 1, water 2).

Evidence: documented 0, mapped 388, inferred 0, derived 2; heights documented 1, inferred 0, unknown 256.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32131260 historic=yes Q26554148 206 m from ledger point
- origin moved 205 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":3,"medianInside":0.9,"medianOutside":12.1}
- sea-1: DEM check ok {"cells":1,"medianInside":0.5,"medianOutside":12.1}
- 25 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.6972/-1.17654) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; artillery battery\|military museum\|independent museum; sitelinks=2; wikidata:Q12059992 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 388 elements); data/traces/heugh-battery-museum-q12059992.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
