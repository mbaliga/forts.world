# Arco delle Due Porte

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-delle-due-porte-q3621769` |
| Coordinates | 43.3153, 11.32778 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.3153/11.32778)) |
| Wikidata | [Q3621769](https://www.wikidata.org/wiki/Q3621769) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Siena |
| Wikipedia language editions | 5 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 236 elements (outline 1, marker 2, road 320, building 400, wall 60, retaining-wall 78, zone 16, water 1, waterway 4, cliff 1).

Evidence: documented 0, mapped 236, inferred 0, derived 0; heights documented 4, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/17449755 historic=citywalls 237 m from ledger point
- pruned to the outline plus 150 m: 883 -> 377 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 127 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 155 mapped (trace size budget); minor lanes are not drawn
- origin moved 237 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.3153/11.32778) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=5; wikidata:Q3621769 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 236 elements); data/traces/arco-delle-due-porte-q3621769.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
