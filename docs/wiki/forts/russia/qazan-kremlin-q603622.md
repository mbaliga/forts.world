# Qazan Kremlin

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `qazan-kremlin-q603622` |
| Coordinates | 55.79744, 49.10724 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.79744/49.10724)) |
| Wikidata | [Q603622](https://www.wikidata.org/wiki/Q603622) (CC0) |
| Wikidata class | fort |
| Types | World Heritage Site\|kremlin\|architectural landmark |
| Administrative area | Kazan |
| Designations | federal cultural heritage site in Russia\|World Heritage Site |
| UNESCO WHC id | 980 |
| Wikipedia language editions | 48 |
| OSM `historic` | castle |
| OSM `castle_type` | kremlin |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 13, road 784, building 169, zone 131, wall 44, water 2, retaining-wall 64, waterway 5).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 42, inferred 0, unknown 89.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14454789 historic=castle Q603622 133 m from ledger point
- pruned to the outline plus 150 m: 1213 -> 768 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 78 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 509 mapped (trace size budget); minor lanes are not drawn
- origin moved 123 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.79744/49.10724) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; World Heritage Site\|kremlin\|architectural landmark; sitelinks=48; wikidata:Q603622 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/qazan-kremlin-q603622.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
