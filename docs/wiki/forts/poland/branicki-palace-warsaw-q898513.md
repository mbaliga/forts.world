# Branicki Palace, Warsaw

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `branicki-palace-warsaw-q898513` |
| Coordinates | 52.24694, 21.01157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.24694/21.01157)) |
| Wikidata | [Q898513](https://www.wikidata.org/wiki/Q898513) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Warsaw |
| Inception | 1740 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 12 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 248 elements (outline 1, marker 54, road 387, building 130, wall 23, zone 60, retaining-wall 20, water 1).

Evidence: documented 0, mapped 248, inferred 0, derived 0; heights documented 27, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/135779066 historic=castle Q898513 7 m from ledger point
- pruned to the outline plus 150 m: 676 -> 487 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 80 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 299 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the outline centroid
- 34 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.24694/21.01157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=12; wikidata:Q898513 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 248 elements); data/traces/branicki-palace-warsaw-q898513.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
