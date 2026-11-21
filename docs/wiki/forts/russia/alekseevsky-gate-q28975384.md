# Alekseevsky Gate

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alekseevsky-gate-q28975384` |
| Coordinates | 47.11566, 39.42123 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.11566/39.42123)) |
| Wikidata | [Q28975384](https://www.wikidata.org/wiki/Q28975384) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|gate |
| Administrative area | Rostov Oblast |
| Inception | C17.. |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 173 elements (outline 1, marker 6, road 44, building 110, wall 2, waterway 2, zone 6, retaining-wall 2).

Evidence: documented 0, mapped 173, inferred 0, derived 0; heights documented 32, inferred 0, unknown 82.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/11281346 historic=castle Q28975384 1 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.11566/39.42123) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|gate; sitelinks=9; wikidata:Q28975384 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 173 elements); data/traces/alekseevsky-gate-q28975384.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
