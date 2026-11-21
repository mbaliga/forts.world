# Rocca Sanvitale

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rocca-sanvitale-q3939414` |
| Coordinates | 44.88255, 10.17296 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.88255/10.17296)) |
| Wikidata | [Q3939414](https://www.wikidata.org/wiki/Q3939414) (CC0) |
| Wikidata class | castle |
| Types | castle\|city hall |
| Administrative area | Fontanellato |
| Inception | 1350 |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 199 elements (outline 1, road 102, building 85, waterway 2, water 1, zone 2, wall 6).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 1, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/2389243 historic=castle Q3939414 28 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.88255/10.17296) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|city hall; sitelinks=4; wikidata:Q3939414 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 199 elements); data/traces/rocca-sanvitale-q3939414.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
