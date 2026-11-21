# Bastion 6 „Albrecht“

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-6-albrecht-q99351918` |
| Coordinates | 49.31579, 6.74637 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.31579/6.74637)) |
| Wikidata | [Q99351918](https://www.wikidata.org/wiki/Q99351918) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|bastion |
| Administrative area | Saarlouis |
| Inception | 1685 |
| Designations | heritage monument in Saarland\|architectural heritage monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 4 |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 10, road 219, waterway 2, building 143, wall 21, water 2, zone 15, retaining-wall 14).

Evidence: documented 0, mapped 335, inferred 0, derived 0; heights documented 35, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/372882703 historic=castle Q99351918 19 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 143 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 219 mapped (trace size budget); minor lanes are not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.31579/6.74637) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|bastion; sitelinks=2; wikidata:Q99351918 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/bastion-6-albrecht-q99351918.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
