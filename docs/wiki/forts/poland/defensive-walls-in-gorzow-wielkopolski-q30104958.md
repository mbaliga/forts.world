# Defensive walls in Gorzów Wielkopolski

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `defensive-walls-in-gorzow-wielkopolski-q30104958` |
| Coordinates | 52.7325, 15.23917 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.7325/15.23917)) |
| Wikidata | [Q30104958](https://www.wikidata.org/wiki/Q30104958) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Gorzów Wielkopolski |
| Inception | 1400 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 266 elements (outline 1, marker 11, road 415, water 3, building 220, zone 114, wall 34, retaining-wall 7, waterway 1, cliff 6).

Evidence: documented 0, mapped 266, inferred 0, derived 0; heights documented 54, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172650097 historic=castle 62 m from ledger point
- pruned to the outline plus 150 m: 812 -> 536 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 139 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 271 mapped (trace size budget); minor lanes are not drawn
- origin moved 64 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.7325/15.23917) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q30104958 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 266 elements); data/traces/defensive-walls-in-gorzow-wielkopolski-q30104958.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
