# Château d'Angers

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-angers-q1048155` |
| Coordinates | 47.47007, -0.55994 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.47007/-0.55994)) |
| Wikidata | [Q1048155](https://www.wikidata.org/wiki/Q1048155) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Angers |
| Inception | C13 |
| Designations | classified historical monument |
| Wikipedia language editions | 29 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.chateau-angers.fr/ |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 9, road 673, building 446, zone 64, waterway 1, wall 99, retaining-wall 18, water 2, cliff 1).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 51, inferred 0, unknown 80.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6370229 historic=castle Q1048155 16 m from ledger point
- pruned to the outline plus 150 m: 1314 -> 818 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 246 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 448 mapped (trace size budget); minor lanes are not drawn
- origin moved 17 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.47007/-0.55994) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=29; wikidata:Q1048155 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/chateau-d-angers-q1048155.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
