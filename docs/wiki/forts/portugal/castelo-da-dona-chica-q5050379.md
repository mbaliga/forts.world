# Castelo da Dona Chica

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelo-da-dona-chica-q5050379` |
| Coordinates | 41.58877, -8.42823 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.58877/-8.42823)) |
| Wikidata | [Q5050379](https://www.wikidata.org/wiki/Q5050379) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|cultural heritage\|manor house |
| Administrative area | Palmeira |
| Inception | 1915 |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 46 elements (outline 1, road 33, zone 1, building 9, wall 2).

Evidence: documented 0, mapped 46, inferred 0, derived 0; heights documented 1, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185016732 historic=castle Q5050379 2 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.58877/-8.42823) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|cultural heritage\|manor house; sitelinks=4; wikidata:Q5050379 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 46 elements); data/traces/castelo-da-dona-chica-q5050379.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
