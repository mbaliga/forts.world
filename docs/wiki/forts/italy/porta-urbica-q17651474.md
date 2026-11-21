# Porta Urbica

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-urbica-q17651474` |
| Coordinates | 37.06361, 15.29167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.06361/15.29167)) |
| Wikidata | [Q17651474](https://www.wikidata.org/wiki/Q17651474) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Syracuse |
| Inception | -0400 |
| Designations | World Heritage Site |
| Wikipedia language editions | 4 |
| OSM `historic` | archaeological_site |
| OSM `description` | Porta di accesso alla fortezza di Ortigia, fatta erigere da Dionigi il Grande. Essa faceva parte della cinta muraria che oltre a cingere Ortigia, costeggiava tutta la città fino al castello Eurialo. |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 10, road 206, zone 2, building 279, wall 31, retaining-wall 3, coastline 3, water 1).

Evidence: documented 0, mapped 321, inferred 0, derived 1; heights documented 56, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/307888028 historic=archaeological_site 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 206 mapped (trace size budget); minor lanes are not drawn
- sea-0: DEM check ok {"cells":57,"medianInside":0,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.06361/15.29167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=4; wikidata:Q17651474 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/porta-urbica-q17651474.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
