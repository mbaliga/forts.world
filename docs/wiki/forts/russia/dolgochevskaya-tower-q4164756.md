# Dolgochevskaya Tower

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dolgochevskaya-tower-q4164756` |
| Coordinates | 54.7819, 32.06094 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.7819/32.06094)) |
| Wikidata | [Q4164756](https://www.wikidata.org/wiki/Q4164756) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Smolensk |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 306 elements (outline 1, marker 5, road 209, building 196, zone 20, waterway 3, wall 1, cliff 6).

Evidence: documented 0, mapped 306, inferred 0, derived 0; heights documented 66, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11366366 historic=castle Q1565762 581 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 196 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 209 mapped (trace size budget); minor lanes are not drawn
- origin moved 615 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.7819/32.06094) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q4164756 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 306 elements); data/traces/dolgochevskaya-tower-q4164756.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
