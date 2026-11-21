# Forte de Milfontes

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-de-milfontes-q10283963` |
| Coordinates | 37.72272, -8.783 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.72272/-8.783)) |
| Wikidata | [Q10283963](https://www.wikidata.org/wiki/Q10283963) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Vila Nova de Milfontes |
| Inception | 1602 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 131 elements (outline 1, marker 1, coastline 1, road 60, waterway 1, building 54, wall 12, water 1).

Evidence: documented 0, mapped 131, inferred 0, derived 1; heights documented 1, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/10619288 historic=castle Q10283963 3 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":193,"medianInside":-1,"medianOutside":15.9}
- 15 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.72272/-8.783) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=5; wikidata:Q10283963 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 131 elements); data/traces/forte-de-milfontes-q10283963.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
